(function(e) {
    function a(h) {
        return new RegExp("(^|\\s+)" + h + "(\\s+|$)")
    }
    var d, f, g;
    if ("classList" in document.documentElement) {
        d = function(h, i) {
            return h.classList.contains(i)
        };
        f = function(h, i) {
            h.classList.add(i)
        };
        g = function(h, i) {
            h.classList.remove(i)
        }
    } else {
        d = function(h, i) {
            return a(i).test(h.className)
        };
        f = function(h, i) {
            if (!d(h, i)) {
                h.className = h.className + " " + i
            }
        };
        g = function(h, i) {
            h.className = h.className.replace(a(i), " ")
        }
    }

    function b(i, j) {
        var h = d(i, j) ? g : f;
        h(i, j)
    }
    var c = {
        hasClass: d,
        addClass: f,
        removeClass: g,
        toggleClass: b,
        has: d,
        add: f,
        remove: g,
        toggle: b
    };
    if (typeof define === "function" && define.amd) {
        define(c)
    } else {
        e.classie = c
    }
})(window);
var cbpAnimatedHeader = (function() {
    var b = document.documentElement,
        g = document.querySelector(".navbar-default"),
        e = false,
        a = 300;

    function f() {
        window.addEventListener("scroll", function(h) {
            if (!e) {
                e = true;
                setTimeout(d, 250)
            }
        }, false)
    }

    function d() {
        var h = c();
        if (h >= a) {
            classie.add(g, "navbar-shrink")
        } else {
            classie.remove(g, "navbar-shrink")
        }
        e = false
    }

    function c() {
        return window.pageYOffset || b.scrollTop
    }
    f()
})();
particlesJS("particles-js", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#FFD54F"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.8,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 6,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 0.01,
                sync: true
            }
        },
        line_linked: {
            enable: true,
            distance: 250,
            color: "#FFF8E1",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true,
    config_demo: {
        hide_card: false,
        background_repeat: "no-repeat",
        background_size: "cover"
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

(function($) {

    $.fn.typer = function(options) {

        var defaults = $.extend({
            search: '',
            replace: [],
            speed: 50,
            delay: 2000
        }, options);

        var bintext = function(length) {
            var text = '';
            for (var $i = 0; $i <= length; $i++) {
                text = text + Math.floor(Math.random() * 2)
            }
            return text;
        };

        this.each(function() {

            var $this = $(this);
            var $text = $this.data('text');
            var position = 0;

            var indexOf = $text.indexOf(defaults.search);
            var normal = $text.substr(0, indexOf);
            var changer = $text.substr(indexOf, $text.length);

            defaults.replace.push(changer);

            var interval = setInterval(function() {
                var $bintext = '';

                if (position == indexOf) {

                    $bintext = bintext(changer.length - 1);

                    $this.html($text.substr(0, normal.length));
                    $this.append('<span>' + $bintext + '</span>')

                } else if (position > indexOf) {


                    $bintext = bintext($text.length - 1);

                    $this.delay(defaults.speed).find('span').html(
                        changer.substring(0, position - indexOf) +
                        $bintext.substring(position, ($bintext.length))
                    );

                } else if (position < indexOf) {

                    $bintext = bintext($text.length - 1);

                    $this.delay(defaults.speed).html(
                        normal.substring(0, position) +
                        $bintext.substring(position, ($bintext.length))
                    );

                }

                if (position < $text.length) {
                    position++;
                } else {
                    clearInterval(interval);

                    var index = 0;
                    setInterval(function() {

                        var position = 0;
                        var newText = defaults.replace[index];

                        var changeInterval = setInterval(function() {

                            var $bintext = '';
                            for (var $i = 0; $i <= newText.length - 1; $i++) {
                                $bintext = $bintext + Math.floor(Math.random() * 2)
                            }

                            $this.delay(defaults.speed).find('span').html(
                                newText.substring(0, position) +
                                $bintext.substring(position, ($bintext.length))
                            );

                            if (position < $text.length) {
                                position++;
                            } else {
                                clearInterval(changeInterval);
                            }

                        }, defaults.speed);

                        if (index < defaults.replace.length - 1) {
                            index++;
                        } else {
                            index = 0;
                        }
                    }, defaults.delay)


                }
            }, defaults.speed)

        });

    }

})(jQuery)

$(function() {
    $('#slogan').typer({
        search: 'Pythonist !',
        replace: ['Javascripter !', 'Sport Coder !', 'Web Dev !', 'Designer !', 'Tech Geek !', '']
    })
})
