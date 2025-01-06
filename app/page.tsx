'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mic,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <Button variant="secondary">Contact Me</Button>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/vignesh-web.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-1">Vignesh M</h1>
          <div className="text-muted-foreground mb-2">
            <Link href="https://twitter.com/vigzmv" className="hover:underline">
              @vigzmv
            </Link>
            {' · '}
            <span>Tech Lead, Software Engineer, Systems Architect</span>
            {' · '}
            <span>New Delhi</span>
          </div>

          <div className="flex gap-2 mb-6">
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
            <p className="mb-4">
              Engineering & Product Leader with over 7 years of expertise in
              Strategizing, Building and Scaling Technical Solutions & Products.
              I deliver Tech Strategy excellence that drives business growth
              with increased revenue, efficiency and customer satisfaction.
            </p>
            <p className="mb-4">
              I specialize in creating high-performing systems and cohesive
              teams, fostering synergy, effective communication, shared
              principles, and alignment toward a common goal. Led teams to scale
              from 0 to 500k Users/month and tens of Million $ in monthly sales.
            </p>
            <button className="text-blue-600 hover:underline">Read more</button>
          </div>

          <p className="text-left w-full mb-6">
            I'm open to{' '}
            <span className="font-medium">
              software development projects, fractional executive roles,
              advising early stage companies, mentoring, and partnering on side
              projects.
            </span>
          </p>

          <div className="flex gap-4 mb-12">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Mic className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>

          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4 text-left">Links</h2>
            <div className="space-y-4">
              <Link
                href="#"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                My Resume
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                My Work Experience
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                My Projects
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="w-full mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-8">
            <div className="grid gap-1">
              <div className="text-sm text-muted-foreground">
                Jul 2018 - Present
              </div>
              <div className="font-medium">
                Chief Technology Officer, Novelship
              </div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm text-muted-foreground">
                Jun 2018 - Aug 2019
              </div>
              <div className="font-medium">Lead Engineer, Novelship</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm text-muted-foreground">
                Jun 2017 - Aug 2018
              </div>
              <div className="font-medium">Engineering Mentor, codementor</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm text-muted-foreground">
                Jun 2017 - Aug 2018
              </div>
              <div className="font-medium">Backend Engineer, Faveo Moves</div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="w-full mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Portfolio</h2>
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            <div className="text-muted-foreground hover:text-foreground">
              Lead Engineer - Novelship
            </div>
            <div className="text-muted-foreground hover:text-foreground">
              Launched the Novelship Mobile App
            </div>
            <div className="text-muted-foreground hover:text-foreground">
              Novelship raises US$10M in Series A
            </div>
            <div className="text-muted-foreground hover:text-foreground">
              2nd Prize Winner - DCB Bank Fin-tech Hackathon
            </div>
          </div>
        </div>

        {/* Things I've Built Section */}
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-6">Things I've built</h2>
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
