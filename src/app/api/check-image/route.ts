import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface FileInfo {
  exists: boolean
  path: string
  size: number
  sizeInMB: string
  created: Date
  modified: Date
  url: string
  readable?: boolean
  bufferSize?: number
  isValidPNG?: boolean
  readError?: string
}

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
    
    // Basic file info with proper typing
    const fileInfo: FileInfo = {
      exists: true,
      path: imagePath,
      size: stats.size,
      sizeInMB: (stats.size / (1024 * 1024)).toFixed(2),
      created: stats.birthtime,
      modified: stats.mtime,
      url: 'https://www.localglobalweb.com/localglobalweb-image.png'
    }

    // Check if file is readable
    try {
      const buffer = fs.readFileSync(imagePath)
      fileInfo.readable = true
      fileInfo.bufferSize = buffer.length
      
      // Check if it's a valid PNG by checking the header
      const pngHeader = buffer.slice(0, 8)
      const isPNG = pngHeader.toString('hex') === '89504e470d0a1a0a'
      fileInfo.isValidPNG = isPNG
      
    } catch (readError) {
      fileInfo.readable = false
      fileInfo.readError = readError instanceof Error ? readError.message : 'Unknown error'
    }

    return NextResponse.json({
      success: true,
      ...fileInfo
    })

  } catch (error) {
    return NextResponse.json({
      error: 'Error checking image',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
