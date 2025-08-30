import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            🚀 LocalGlobalWeb
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            maxWidth: '1000px',
            lineHeight: 1.2,
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            marginBottom: '20px',
          }}
        >
          Web Design Dublin
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Professional website designers creating affordable, responsive websites for small businesses
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '24px',
          }}
        >
          <span>📍 Dublin, Ireland</span>
          <span>📞 (089) 2781782</span>
          <span>🌐 localglobalweb.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
