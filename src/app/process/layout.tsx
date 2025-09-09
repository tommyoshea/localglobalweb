import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Process | Web Design Process Dublin | LocalGlobalWeb',
  description: 'Learn about our proven web design process in Dublin. From consultation to launch, discover how LocalGlobalWeb creates professional websites that drive results for your business.',
  openGraph: {
    title: 'Our Process | Web Design Process Dublin | LocalGlobalWeb',
    description: 'Learn about our proven web design process in Dublin. From consultation to launch, discover how LocalGlobalWeb creates professional websites that drive results for your business.',
          images: [
        {
          url: 'https://www.localglobalweb.com/localglobalweb-image.png',
          width: 1200,
          height: 630,
          alt: 'Web Design Process - LocalGlobalWeb Dublin'
        }
      ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Process | Web Design Process Dublin | LocalGlobalWeb',
    description: 'Learn about our proven web design process in Dublin. From consultation to launch, discover how LocalGlobalWeb creates professional websites that drive results for your business.',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  },
  alternates: {
    canonical: 'https://www.localglobalweb.com/process'
  }
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
