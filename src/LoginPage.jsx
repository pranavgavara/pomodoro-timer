import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const USERS = [
  { email: 'gp47@habits.local', password: 'gp47pass123', name: 'GP47' },
  { email: 'pri@habits.local', password: 'pripass123', name: 'Pri' },
  { email: 'nikki@habits.local', password: 'nikkilogpass123', name: 'Nikki' },
  { email: 'sid@habits.local', password: 'sidpass123', name: 'Sid' },
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  const quickLogin = async (user) => {
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
    } catch (err) {
      setError('Login failed');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f1e',
      color: '#c8b6ff',
      fontFamily: '"Fredoka One", "Righteous", sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <div style={{
        background: '#1a1a2e',
        padding: '40px',
        borderRadius: '15px',
        border: '2px solid #c8b6ff',
        maxWidth: '500px',
        width: '100%',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎯</div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Habit Tracker</h1>
          <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>For 4 Friends</p>
        </div>

        <form onSubmit={handleLogin} style={{ marginBottom: '30px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., pri@habits.local"
              style={{
                width: '100%',
                padding: '12px',
                background: '#0f0f1e',
                color: '#c8b6ff',
                border: '2px solid #c8b6ff',
                borderRadius: '8px',
                fontFamily: 'inherit',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '12px',
                background: '#0f0f1e',
                color: '#c8b6ff',
                border: '2px solid #c8b6ff',
                borderRadius: '8px',
                fontFamily: 'inherit',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <div style={{ color: '#ff6b6b', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: '#c8b6ff',
              color: '#0f0f1e',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '16px',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginBottom: '20px', color: '#999', fontSize: '14px' }}>
          OR QUICK LOGIN
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {USERS.map((user) => (
            <button
              key={user.email}
              onClick={() => quickLogin(user)}
              disabled={loading}
              style={{
                padding: '12px',
                background: 'transparent',
                color: '#c8b6ff',
                border: '2px solid #c8b6ff',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '14px',
                transition: 'all 0.2s',
                opacity: loading ? 0.6 : 1,
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#c8b6ff';
                e.target.style.color = '#0f0f1e';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#c8b6ff';
              }}
            >
              Login as {user.name}
            </button>
          ))}
        </div>

        <div style={{
          marginTop: '30px',
          padding: '15px',
          background: '#2a2547',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#999',
          lineHeight: '1.6',
        }}>
          <strong style={{ color: '#c8b6ff' }}>Test Accounts:</strong><br />
          GP47: gp47@habits.local / gp47pass123<br />
          Pri: pri@habits.local / pripass123<br />
          Nikki: nikki@habits.local / nikkilogpass123<br />
          Sid: sid@habits.local / sidpass123
        </div>
      </div>
    </div>
  );
}
