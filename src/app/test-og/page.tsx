import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Open Graph Image',
  description: 'Testing Open Graph image display',
  openGraph: {
    title: 'Test Open Graph Image',
    description: 'Testing Open Graph image display',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'Test Open Graph Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Open Graph Image',
    description: 'Testing Open Graph image display',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  }
}

export default function TestOGPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Open Graph Image Test</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Image Information</h2>
          <p><strong>Image URL:</strong> https://www.localglobalweb.com/localglobalweb-image.png</p>
          <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
          <p><strong>Vercel URL:</strong> {process.env.VERCEL_URL || 'Not set'}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Links</h2>
          <div className="space-y-2">
            <a 
              href="https://www.localglobalweb.com/localglobalweb-image.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Direct Image Link
            </a>
            <a 
              href="/api/test-image"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Image Test API
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Social Media Testers</h2>
          <div className="space-y-2">
            <a 
              href="https://developers.facebook.com/tools/debug/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Facebook Sharing Debugger
            </a>
            <a 
              href="https://cards-dev.twitter.com/validator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Twitter Card Validator
            </a>
            <a 
              href="https://www.linkedin.com/post-inspector/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              LinkedIn Post Inspector
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
