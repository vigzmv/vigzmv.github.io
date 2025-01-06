'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaDev,
  FaLinkedin,
  FaSquareGithub,
  FaSquarePen,
  FaSquareTwitter,
} from 'react-icons/fa6';
import { SiNpm } from 'react-icons/si';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const WorkEx = [
  ['Aug 2019 - Present', 'Chief Technology Officer, Novelship'],
  ['Jun 2018 - Aug 2019', 'Lead Engineer, Novelship'],
  ['Dec 2017 - Aug 2018', 'Fullstack JavaScript Engineer, iorad'],
  ['Jun 2017 - Jan 2018', 'Backend Engineer, Faveo Moves'],
  ['Apr 2017 - Sep 2017', 'Backend Engineer, Finmo'],
  ['Jan 2017 - Mar 2017', 'Software Engineering Intern, Twirll'],
  ['Aug 2016 - Nov 2016', 'Web Development Intern, CV Owl'],
];

const PortfolioItems = [
  {
    title: 'Novelship raises US$9.5M in Series B',
    description:
      'Asia’s fastest-growing sneaker marketplace Novelship secures US$9.5 million in series B funding round led by East Ventures, following latest collaboration with Snoop Dogg',
    image:
      'https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2019/04/12120653/logo-343x60.png',
    imageClass: 'object-contain',
    link: 'https://east.vc/news/press-release/novelship-secures-series-b-funding-led-by-east-ventures/',
    year: 2023,
  },
  {
    title: 'Novelship raises US$10M in Series A',
    description:
      'Novelship raises close to US$10M in Series A to further expand in APAC, explore metaverse integration',
    image:
      'https://gsrventuresglobal.com/wp-content/uploads/2020/06/GSR_LOGO_MD.png',
    imageClass: 'object-contain',
    link: 'https://east.vc/east-ventures/novelship-raises-series-a-funding-to-ignite-sneaker-and-streetwear-culture-in-asia/',
    year: 2021,
  },
  {
    title: 'Launched the Novelship Mobile App',
    description:
      "Led the development of Novelship's mobile app from concept to launch, resulting in 100k+ downloads and $2M+ in mobile revenue in first quarter.",
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/73/3f/75/733f7555-d228-cef7-531f-6b3ef55e300e/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png',
    imageClass: 'object-cover',
    link: 'https://apps.apple.com/sg/app/novelship-authentic-sneakers/id1553741278',
    year: 2021,
  },
  {
    title: 'Novelship raises US$2M in Seed',
    description:
      'Collectible sneakers startup Novelship raises US$2.05m in seed round led by Global Founders Capital',
    image:
      'https://www.businesstimes.com.sg/assets-web2/logo-business-times-home-og-BtdYjdmJ.jpg',
    imageClass: 'object-cover',
    link: 'https://www.businesstimes.com.sg/startups-tech/startups/collectible-sneakers-startup-novelship-raises-us205m-seed-round-led-global',
    year: 2019,
  },
  {
    title: 'React Promise Suspense',
    description:
      '10 Million+ Downloads. A React hook for resolving promises with Suspense support. <1kb bundle.',
    image:
      'https://opengraph.githubassets.com/aba36c12e698e99d2fb990a00f84a87cd9e82839ccddce4cc5b475b3c32a5469/vigzmv/react-promise-suspense',
    imageClass: 'object-cover',
    link: 'https://github.com/vigzmv/react-promise-suspense',
    year: 2019,
  },
  {
    title: 'what_the_thing',
    description:
      '📷 Point your camera at things to learn how to say them in a different language. Mobile app built with React Native. 500+ stars ⭐️',
    image:
      'https://opengraph.githubassets.com/3b21b277ac6d2aa33db457e3c8752c4af7bec4b80f6393bb3963ec912855871c/vigzmv/what_the_thing',
    imageClass: 'object-cover',
    link: 'https://github.com/vigzmv/what_the_thing',
    year: 2017,
  },
  {
    title: 'LocalStorage Node',
    description:
      'In-memory localStorage polyfill for Node.js utilizing ES6 proxies.',
    image:
      'https://opengraph.githubassets.com/43abfaada60cf23cfbb5e85d9a53c477e45550bf8a45fd3afafc2c9c465c5d40/vigzmv/localStorage-node',
    imageClass: 'object-cover',
    link: 'https://github.com/vigzmv/localStorage-node',
    year: 2018,
  },
  {
    title: 'Into the ReactJs',
    description:
      'Mentored 5-hour ReactJs Workshop at Facebook Dev Circle Delhi',
    image:
      'https://opengraph.githubassets.com/6fbfbd0903a063fe9008284f60973bd40769f6ff409e6aa5f59bd3ae745e0ade/vigzmv/Into-the-ReactJs',
    imageClass: 'object-cover',
    link: 'https://github.com/vigzmv/Into-the-ReactJs',
    year: 2018,
  },
  {
    title: '2nd Prize Winner',
    description:
      'DCB Bank Fin-tech Hackathon 2018. Organized by DCB Bank, Dev Accelerator & 91Springboard',
    image:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F35944131%2F226265900343%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C0%2C998%2C499&s=86e599210dda009c206de3d804801b6e',
    imageClass: 'object-cover',
    link: '#',
    year: 2018,
  },
  {
    title: '1st Prize Winner',
    description: 'ClashHacks Hackathon 2017 API Challenge.',
    image: 'https://i.ytimg.com/vi/t3YM7YxMvCc/maxresdefault.jpg',
    imageClass: 'object-cover',
    link: '#',
    year: 2017,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-2xl mx-auto px-8 py-8 mb-8">
        <div className="flex justify-end mb-4">
          <Link href="mailto:vigzmv@outlook.com">
            <Button variant="secondary">Contact Me</Button>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/vignesh-web.jpg"
            alt="Vignesh M profile picture"
            width={144}
            height={144}
            className="rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Vignesh M</h1>
          <div className="text-muted-foreground mb-3">
            <Link href="#" className="hover:underline">
              @vigzmv
            </Link>{' '}
            on the internet
            {' · '}
            <span>New Delhi, India</span>
          </div>

          <div className="flex gap-2 mb-5">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 hover:bg-blue-100"
            >
              👨‍💻 Tech Lead
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 hover:bg-purple-100"
            >
              🛠 Software Engineer
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 hover:bg-green-100"
            >
              📐 Software Architect
            </Badge>
          </div>

          <div className="text-muted-foreground text-left mb-4">
            <p className="mb-4 font-semibold text-foreground/70">
              Engineering & Product Leader with over 7 years of expertise in
              strategizing, building and scaling technical solutions & products.
            </p>
            <p className="mb-4">
              I deliver Tech Strategy excellence that drives business growth
              with increased revenue, efficiency and customer satisfaction. I
              specialize in creating high-performing systems and cohesive teams,
              fostering synergy, effective communication, shared principles, and
              alignment toward a common goal. Led teams to scale from 0 to 500k
              Users/month and tens of Millions $ in monthly sales.
            </p>
            {/* <p className="mb-4">
              Recent Project: Novelship iOS and Android Apps that grossed the
              top spots (11th in Shopping). 500k+ Installs, 4.8 ⭐ Ratings &
              10k+ Reviews. 100 Million+ in Revenue.
            </p> */}
            <p className="mb-4">
              <span className="font-semibold text-foreground/70">Roles:</span>{' '}
              CTO. Tech Lead. Software Architect. Product Engineer.
            </p>
            <p className="mb-4">
              <span className="font-semibold text-foreground/70">
                Expertise:
              </span>{' '}
              Tech Leadership, Fullstack Development, Systems Architecture,
              Performance-Cost Optimisation & Mobile Apps.
            </p>
            <p className="mb-1">
              I'm open to software development projects, fractional executive
              roles, advising early stage companies, mentoring, and partnering
              on side projects.
            </p>
            <p className="">
              <span className="font-semibold text-foreground/70">Email:</span>{' '}
              <span className="underlie">vigzmv@outlook.com</span>
            </p>
          </div>

          <div className="flex gap-5 mb-2.5 mt-6 items-center">
            <Link href="https://vigzmv.github.io/VigneshM.pdf" target="_blank">
              <Button variant="default" className="mt-0">
                My Resume
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/vigzmv" target="_blank">
              <Button variant="default" className="mt-0">
                My Work Experience
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 mb-3 mt-3 items-center">
            <Link
              href="https://github.com/vigzmv"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaSquareGithub className="w-9 h-9" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vigzmv"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin className="w-9 h-9" />
            </Link>
            <Link
              href="https://leetcode.com/u/vigzmv"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaSquarePen className="w-9 h-9" />
            </Link>
            <Link
              href="https://www.npmjs.com/~vigzmv"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <SiNpm className="w-8 h-8" />
            </Link>
            <Link
              href="https://dev.to/vigzmv"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaDev className="w-9 h-9" />
            </Link>
            <Link
              href="https://twitter.com/vigzmv"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaSquareTwitter className="w-9 h-9" />
            </Link>
          </div>
        </div>

        <div className="w-full mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {WorkEx.map(([date, title], index) => (
              <div className="grid gap-1">
                <div className="text-sm text-muted-foreground">{date}</div>
                <div className="font-medium">{title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Featured</h2>
          </div>

          <div className="space-y-8">
            {PortfolioItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-blue-500 transition-colors"
              >
                <Link href={item.link} className="block" target="_blank">
                  <div className="flex flex-col md:flex-row p-4">
                    <div className="relative h-48 md:h-auto md:w-2/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={item.imageClass}
                      />
                    </div>
                    <CardContent className="md:w-3/5 flex flex-col justify-center px-0 pt-4 pb-2 md:px-6 md:pt-3 md:pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <h3 className="font-semibold text-lg leading-6">
                              {item.title}
                              <span className="text-sm font-normal text-muted-foreground">
                                {' - '}
                                {item.year}
                              </span>
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                        <FiExternalLink className="w-5 h-5 text-muted-foreground/60 flex-shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
