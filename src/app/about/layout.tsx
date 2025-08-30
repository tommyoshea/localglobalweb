import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Dublin Web Designers | LocalGlobalWeb',
  description: 'Meet the Dublin web design team at LocalGlobalWeb. We\'re passionate about creating affordable, professional websites that help small businesses succeed online.',
  openGraph: {
    title: 'About Us | Dublin Web Designers | LocalGlobalWeb',
    description: 'Meet the Dublin web design team at LocalGlobalWeb. We\'re passionate about creating affordable, professional websites that help small businesses succeed online.',
          images: [
        {
          url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/localglobalweb-image.png` : 'http://localhost:3000/localglobalweb-image.png',
          width: 1200,
          height: 630,
          alt: 'About LocalGlobalWeb - Dublin Web Designers'
        }
      ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Dublin Web Designers | LocalGlobalWeb',
    description: 'Meet the Dublin web design team at LocalGlobalWeb. We\'re passionate about creating affordable, professional websites that help small businesses succeed online.',
    images: [process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/localglobalweb-image.png` : 'http://localhost:3000/localglobalweb-image.png']
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
