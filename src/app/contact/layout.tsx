import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Dublin Web Designers | LocalGlobalWeb',
  description: 'Get in touch with Dublin\'s leading web designers. Contact LocalGlobalWeb for a free consultation and quote on your website project.',
  openGraph: {
    title: 'Contact Us | Dublin Web Designers | LocalGlobalWeb',
    description: 'Get in touch with Dublin\'s leading web designers. Contact LocalGlobalWeb for a free consultation and quote on your website project.',
    images: [
      {
        url: '/api/og?title=Contact Us | Dublin Web Designers&description=Get in touch with Dublin\'s leading web designers. Contact LocalGlobalWeb for a free consultation and quote.',
        width: 1200,
        height: 630,
        alt: 'Contact LocalGlobalWeb - Dublin Web Designers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Dublin Web Designers | LocalGlobalWeb',
    description: 'Get in touch with Dublin\'s leading web designers. Contact LocalGlobalWeb for a free consultation and quote on your website project.',
    images: ['/api/og?title=Contact Us | Dublin Web Designers&description=Get in touch with Dublin\'s leading web designers. Contact LocalGlobalWeb for a free consultation and quote.']
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
