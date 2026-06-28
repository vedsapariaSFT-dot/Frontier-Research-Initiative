export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #6b21a8 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '896px' }}>
        <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold', margin: '0 0 24px 0' }}>Science For Tomorrow</h1>
        <p style={{ fontSize: '1.5rem', margin: '0 0 32px 0', color: '#d1d5db' }}>
          Investing in Humanity's Future Through Scientific Discovery
        </p>
        <p style={{ fontSize: '1.125rem', margin: '0 0 48px 0', color: '#9ca3af' }}>
          Founded by Ved Saparia
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/about" style={{
            padding: '12px 32px',
            background: '#06b6d4',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Learn More
          </a>
          <a href="/organizations" style={{
            padding: '12px 32px',
            border: '2px solid #06b6d4',
            color: '#06b6d4',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            background: 'transparent',
          }}>
            Explore
          </a>
        </div>
      </div>
    </div>
  )
}