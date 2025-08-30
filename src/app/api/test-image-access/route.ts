import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test if the image is accessible
    const imageUrl = 'https://www.localglobalweb.com/localglobalweb-image.png'
    
    const response = await fetch(imageUrl, { method: 'HEAD' })
    
    if (response.ok) {
      return NextResponse.json({
        success: true,
        status: response.status,
        contentType: response.headers.get('content-type'),
        contentLength: response.headers.get('content-length'),
        url: imageUrl,
        message: 'Image is accessible'
      })
    } else {
      return NextResponse.json({
        success: false,
        status: response.status,
        url: imageUrl,
        message: 'Image not accessible'
      }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to test image accessibility'
    }, { status: 500 })
  }
}
