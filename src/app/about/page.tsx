export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #6b21a8 100%)',
      color: 'white',
      padding: '32px',
    }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px' }}>About Science For Tomorrow</h1>
        <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '24px' }}>
          Founded by Ved Saparia, Science For Tomorrow is dedicated to inspiring scientific curiosity.
        </p>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '40px', marginBottom: '16px' }}>Our Mission</h2>
        <p style={{ fontSize: '1.125rem', color: '#9ca3af', marginBottom: '24px' }}>
          To inspire scientific curiosity, connect researchers with global audiences, and support organizations advancing humanity.
        </p>
      </div>
    </div>
  )
}