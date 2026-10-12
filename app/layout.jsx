import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { candidate } from '@/src/data/candidate';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://dhirajkumar.me'),
  title: {
    default: 'Dhiraj Kumar | Software Engineer & Full-Stack Developer',
    template: '%s | Dhiraj Kumar',
  },
  description:
    'Dhiraj Kumar is a software engineer and full-stack developer interested in modern web technologies, artificial intelligence, automation, and agentic systems. Through his portfolio and technical writing, he explores practical approaches to building reliable software and AI-powered applications.',
  keywords: [
    'Dhiraj Kumar',
    'Dhiraj Kumar Software Engineer',
    'Dhiraj Kumar Developer',
    'Dhiraj Kumar Full Stack Developer',
    'Dhiraj Kumar AI',
    'Dhiraj Kumar AI Agents',
    'Dhiraj Kumar Portfolio',
    'Dhiraj Kumar GitHub',
    'Dhiraj Kumar Web Developer',
    'Dhiraj Kumar Software Developer',
  ],
  authors: [{ name: 'Dhiraj Kumar', url: 'https://dhirajkumar.me' }],
  creator: 'Dhiraj Kumar',
  publisher: 'Dhiraj Kumar',
  alternates: {
    canonical: 'https://dhirajkumar.me',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Dhiraj Kumar | Software Engineer & Full-Stack Developer',
    description:
      'Dhiraj Kumar is a software engineer and full-stack developer interested in modern web technologies, artificial intelligence, automation, and agentic systems. Through his portfolio and technical writing, he explores practical approaches to building reliable software and AI-powered applications.',
    url: 'https://dhirajkumar.me',
    siteName: 'Dhiraj Kumar Portfolio',
    images: [
      {
        url: '/Photo-dhiru.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dhiraj Kumar — Software Developer & Full-Stack Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhiraj Kumar | Software Engineer & Full-Stack Developer',
    description:
      'Dhiraj Kumar is a software engineer and full-stack developer exploring modern web technologies, AI, and agentic systems.',
    images: ['/Photo-dhiru.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://dhirajkumar.me/#person',
        name: candidate.name,
        givenName: candidate.firstName,
        jobTitle: 'Software Engineer & Full-Stack Developer',
        description:
          'Dhiraj Kumar is a software engineer and full-stack developer interested in modern web technologies, artificial intelligence, automation, and agentic systems.',
        url: 'https://dhirajkumar.me/',
        image: 'https://dhirajkumar.me/Photo-dhiru.jpeg',
        sameAs: candidate.sameAs,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: candidate.university,
        },
        knowsAbout: [
          'Software Engineering',
          'Full-Stack Development',
          'React.js',
          'Node.js',
          'MongoDB',
          'Artificial Intelligence',
          'AI Agents',
          'Agentic AI',
          'Docker',
          'WebSockets',
        ],
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://dhirajkumar.me/#profilepage',
        url: 'https://dhirajkumar.me/',
        name: 'Dhiraj Kumar | Software Engineer & Full-Stack Developer',
        mainEntity: {
          '@id': 'https://dhirajkumar.me/#person',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dhirajkumar.me/#website',
        url: 'https://dhirajkumar.me/',
        name: 'Dhiraj Kumar Portfolio',
        publisher: {
          '@id': 'https://dhirajkumar.me/#person',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-[#09090B] text-[#FAFAFA] antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
