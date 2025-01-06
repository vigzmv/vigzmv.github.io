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

const WorkEx = [
  ['Aug 2019 - Present', 'Chief Technology Officer, Novelship'],
  ['Jun 2018 - Aug 2019', 'Lead Engineer, Novelship'],
  ['Dec 2017 - Aug 2018', 'Fullstack JavaScript Engineer, iorad'],
  ['Jun 2017 - Jan 2018', 'Backend Engineer, Faveo Moves'],
  ['Apr 2017 - Sep 2017', 'Backend Engineer, Finmo'],
  ['Jan 2017 - Mar 2017', 'Software Engineering Intern, Twirll'],
  ['Aug 2016 - Nov 2016', 'Web Development Intern, CV Owl'],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <Link href="mailto:vigzmv@outlook.com">
            <Button variant="secondary">Contact Me</Button>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/vignesh-web.jpg"
            alt="Vignesh M profile picture"
            width={120}
            height={120}
            className="rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Vignesh M</h1>
          <div className="text-muted-foreground mb-3">
            <Link href="https://twitter.com/vigzmv" className="hover:underline">
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
            <p className="mb-0.5">
              I'm open to software development projects, fractional executive
              roles, advising early stage companies, mentoring, and partnering
              on side projects.
            </p>
            <p className="">
              <span className="font-semibold text-foreground/70">Email:</span>{' '}
              <span className="underlie">vigzmv@outlook.com</span>
            </p>
          </div>

          <div className="flex gap-5 mb-2 mt-4 items-center">
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

          <div className="flex gap-4 mb-2 mt-3 items-center">
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

        <div className="w-full">
          <h2 className="text-xl font-semibold mb-6">Featured</h2>
          <div className="space-y-6">
            <div className="grid gap-2">
              <p className="text-muted-foreground">
                Into the React.js Mentored 5-hour React.js Workshop at Facebook
                Dev Circle Delhi Code content for my Workshop on React.{' '}
                <Link
                  href="https://github.com/vigzmv/into-the-ReactJs"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/vigzmv/into-the-ReactJs
                </Link>
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-muted-foreground">
                localStorage-node in memory localStorage polyfill for node.js
                utilizing ES6 proxies.{' '}
                <Link
                  href="https://github.com/vigzmv/localStorage-node"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/vigzmv/localStorage-node
                </Link>
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-muted-foreground">
                react-promise-suspense 1Million+ Downloads. A React hook for
                resolving promises with Suspense support. {'<1kb'} bundle.{' '}
                <Link
                  href="https://github.com/vigzmv/react-promise-suspense"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/vigzmv/react-promise-suspense
                </Link>
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-muted-foreground">
                what_the_thing 📸 Point your camera at things to learn how to
                say them in a different language. Mobile app built with React
                Native.{' '}
                <Link
                  href="https://github.com/vigzmv/what_the_thing"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/vigzmv/what_the_thing
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
