import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | LocalGlobalWeb',
  description: 'Find answers to frequently asked questions about web design services in Dublin. Learn about our process, pricing, and what makes LocalGlobalWeb the best choice for your website.',
  openGraph: {
    title: 'FAQ | Frequently Asked Questions | LocalGlobalWeb',
    description: 'Find answers to frequently asked questions about web design services in Dublin. Learn about our process, pricing, and what makes LocalGlobalWeb the best choice for your website.',
          images: [
        {
          url: 'https://www.localglobalweb.com/localglobalweb-image.png',
          width: 1200,
          height: 630,
          alt: 'FAQ - LocalGlobalWeb Dublin Web Designers'
        }
      ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Frequently Asked Questions | LocalGlobalWeb',
    description: 'Find answers to frequently asked questions about web design services in Dublin. Learn about our process, pricing, and what makes LocalGlobalWeb the best choice for your website.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  }
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
