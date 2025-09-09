import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Dublin Web Designers | LocalGlobalWeb',
  description: 'Meet the Dublin web design team at LocalGlobalWeb. We\'re passionate about creating affordable, professional websites that help small businesses succeed online.',
  openGraph: {
    title: 'About Us | Dublin Web Designers | LocalGlobalWeb',
    description: 'Meet the Dublin web design team at LocalGlobalWeb. We\'re passionate about creating affordable, professional websites that help small businesses succeed online.',
          images: [
        {
          url: 'https://www.localglobalweb.com/localglobalweb-image.png',
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
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  alternates: {
    canonical: 'https://www.localglobalweb.com/about'
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
