import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const imagePath = path.join(process.cwd(), 'public', 'localglobalweb-image.png')
    const exists = fs.existsSync(imagePath)
    
    if (!exists) {
      return NextResponse.json({
        error: 'Image file not found',
        path: imagePath
      }, { status: 404 })
    }

    const stats = fs.statSync(imagePath)
    
    return NextResponse.json({
      success: true,
      exists: true,
      path: imagePath,
      size: stats.size,
      created: stats.birthtime,
      modified: stats.mtime,
      url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/localglobalweb-image.png` : 'http://localhost:3000/localglobalweb-image.png'
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Error checking image',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
