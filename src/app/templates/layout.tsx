import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Templates | Professional Web Design Templates | LocalGlobalWeb',
  description: 'Browse our collection of professional website templates for electricians, plumbers, chemists, solicitors and more. Customizable templates designed for Dublin businesses.',
  openGraph: {
    title: 'Website Templates | Professional Web Design Templates | LocalGlobalWeb',
    description: 'Browse our collection of professional website templates for electricians, plumbers, chemists, solicitors and more. Customizable templates designed for Dublin businesses.',
          images: [
        {
          url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/localglobalweb-image.png` : 'http://localhost:3000/localglobalweb-image.png',
          width: 1200,
          height: 630,
          alt: 'Professional Website Templates - LocalGlobalWeb'
        }
      ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Templates | Professional Web Design Templates | LocalGlobalWeb',
    description: 'Browse our collection of professional website templates for electricians, plumbers, chemists, solicitors and more. Customizable templates designed for Dublin businesses.',
    images: [process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/localglobalweb-image.png` : 'http://localhost:3000/localglobalweb-image.png']
  }
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
