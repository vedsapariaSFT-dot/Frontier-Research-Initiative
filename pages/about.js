export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #6b21a8 100%)',
      color: 'white',
      padding: '32px',
    }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 24px 0' }}>About Science For Tomorrow</h1>
        <p style={{ fontSize: '1.25rem', color: '#d1d5db', margin: '0 0 24px 0' }}>
          Founded by Ved Saparia, Science For Tomorrow is dedicated to inspiring scientific curiosity.
        </p>
      </div>
    </div>
  );
}
