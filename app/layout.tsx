import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';

const meta = {
  title: 'Vignesh M - Tech Lead | Software Engineer | Software Architect',
  desc: 'Engineering & Product Leader with expertise in scaling high-performing systems and cohesive teams. Open to tech consulting and fractional executive roles.',
  image: 'https://vigneshm.com/vignesh-web.jpg',
  url: 'https://vigneshm.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta.title}</title>
        <meta
          name="description"
          content="Vignesh M, a Tech Lead and Software Architect based in New Delhi, India, with over 7 years of experience in strategizing, building, and scaling technical solutions and products. Available for software development projects, fractional executive roles, and mentoring."
        />
        <meta name="author" content="Vignesh M" />
        <meta
          name="keywords"
          content="Vignesh M, Tech Lead, Software Engineer, Software Architect, Product Engineer, Tech Leadership, Fullstack Development, Systems Architecture, Mobile Apps, New Delhi, India, fractional executive roles, tech consulting, software development, performance optimization"
        />
        <link rel="canonical" href={meta.url} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content="@vigzmv" />

        <link
          rel="icon"
          href="https://vigneshm.com/favicon.ico"
          type="image/x-icon"
        />

        <meta name="robots" content="index, follow" />

        {/* <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://vigneshm.com/sitemap.xml"
        /> */}
        <meta name="theme-color" content="#ffffff" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vignesh M',
              alternateName: '@vigzmv',
              url: meta.url,
              image: meta.image,
              jobTitle: 'Tech Lead, Software Engineer, Software Architect',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'New Delhi',
                addressCountry: 'India',
              },
              description:
                'Engineering & Product Leader with over 7 years of experience in strategizing, building, and scaling technical solutions & products.',
              sameAs: [
                meta.url,
                'https://github.com/vigzmv',
                'https://linkedin.com/in/vigzmv',
                'https://twitter.com/vigzmv',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Novelship',
                url: 'https://novelship.com',
              },
              knowsAbout: [
                'Tech Leadership',
                'Fullstack Development',
                'Systems Architecture',
                'Performance Optimization',
                'Mobile Apps',
                'Product Engineering',
                'Scaling Teams and Systems',
              ],
              offers: {
                '@type': 'Offer',
                name: 'Software Development Projects, Fractional Executive Roles, Mentoring, Tech Advising',
                url: meta.url,
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: "Master's in Computer Science",
                url: 'https://gatech.edu',
              },
            }),
          }}
        />
      </head>

      <body>{children}</body>
      <GoogleAnalytics gaId="G-FSNYEJV94Q" />
    </html>
  );
}
