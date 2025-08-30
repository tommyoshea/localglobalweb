import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meta Tags Test',
  description: 'Testing Open Graph and Twitter Card meta tags',
  openGraph: {
    title: 'Meta Tags Test - LocalGlobalWeb',
    description: 'Testing Open Graph and Twitter Card meta tags',
    type: 'website',
    url: 'https://www.localglobalweb.com/test-meta',
    siteName: 'LocalGlobalWeb',
    images: [
      {
        url: 'https://www.localglobalweb.com/localglobalweb-image.png',
        width: 1200,
        height: 630,
        alt: 'LocalGlobalWeb - Dublin Web Designers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Tags Test - LocalGlobalWeb',
    description: 'Testing Open Graph and Twitter Card meta tags',
    images: ['https://www.localglobalweb.com/localglobalweb-image.png']
  }
}

export default function TestMetaPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Meta Tags Test Page</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Meta Tags</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Title:</strong> Meta Tags Test</p>
            <p><strong>Description:</strong> Testing Open Graph and Twitter Card meta tags</p>
            <p><strong>Open Graph Image:</strong> https://www.localglobalweb.com/localglobalweb-image.png</p>
            <p><strong>Twitter Card Image:</strong> https://www.localglobalweb.com/localglobalweb-image.png</p>
          </div>
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
              href="/api/test-image-access"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              Test Image Accessibility
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
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

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Troubleshooting Tips</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Make sure the image is exactly 1200x630 pixels</li>
            <li>Image should be under 1MB (your image is 623KB - this is fine)</li>
            <li>Use PNG or JPG format</li>
            <li>Clear social media cache after changes</li>
            <li>Test with social media debuggers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
