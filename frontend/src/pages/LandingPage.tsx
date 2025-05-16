import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>mytask.ai</h1>
      <button
        style={hovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onClick={() => navigate('/home')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Login with Google
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white', // Ensure the entire page is white
    display: 'flex',
    flexDirection: 'column' as const, // to satisfy TS for 'column' literal
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    margin: 0, // Remove any default margin
    padding: 0, // Remove any default padding
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: 'white',
    width: '100vw', // Ensure full width
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    letterSpacing: '2px',
    color: '#0070f3',
  },
  button: {
    backgroundColor: '#0070f3',
    border: 'none',
    color: 'white',
    padding: '12px 30px',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: 8,
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(0, 118, 255, 0.39)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#005bb5',
    boxShadow: '0 6px 20px rgba(0, 91, 181, 0.54)',
  },
};
