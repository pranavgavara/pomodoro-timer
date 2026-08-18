import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const USERS = [
  { email: 'gp47@habits.local', password: 'gp47pass123', name: 'GP47', emoji: '🚀', color: '#FF6B9D', bgColor: '#FFE5F0' },
  { email: 'pri@habits.local', password: 'pripass123', name: 'Pri', emoji: '🎯', color: '#00D9FF', bgColor: '#E0F7FF' },
  { email: 'nikki@habits.local', password: 'nikkilogpass123', name: 'Nikki', emoji: '✨', color: '#FFAA00', bgColor: '#FFF4E0' },
  { email: 'sid@habits.local', password: 'sidpass123', name: 'Sid', emoji: '⚡', color: '#7FFF00', bgColor: '#F0FFE0' },
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
      background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a3e 50%, #0a2a3e 100%)',
      color: '#c8b6ff',
      fontFamily: '"Fredoka One", "Righteous", sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '-100px',
        right: '-100px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '-100px',
        left: '-100px',
        pointerEvents: 'none',
      }} />

      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2a4e 100%)',
        padding: '50px',
        borderRadius: '20px',
        border: '2px solid #c8b6ff',
        maxWidth: '550px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(200, 182, 255, 0.2)',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '60px', marginBottom: '15px', animation: 'float 3s ease-in-out infinite' }}>🎯</div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>Habit Tracker</h1>
          <p style={{ fontSize: '16px', background: 'linear-gradient(90deg, #c8b6ff, #ff006e)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '10px', fontWeight: 'bold' }}>For 4 Friends 🚀</p>
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

        <div style={{ textAlign: 'center', marginBottom: '25px', color: '#999', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
          ⚡ Quick Login
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '30px' }}>
          {USERS.map((user) => (
            <button
              key={user.email}
              onClick={() => quickLogin(user)}
              disabled={loading}
              style={{
                padding: '20px 15px',
                background: user.bgColor,
                color: user.color,
                border: `3px solid ${user.color}`,
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '16px',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: loading ? 0.6 : 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: `0 4px 15px ${user.color}30`,
                transform: 'translateY(0px)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${user.color}50`;
                e.currentTarget.style.background = user.color;
                e.currentTarget.style.color = '#0f0f1e';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = `0 4px 15px ${user.color}30`;
                e.currentTarget.style.background = user.bgColor;
                e.currentTarget.style.color = user.color;
              }}
            >
              <span style={{ fontSize: '28px' }}>{user.emoji}</span>
              <span>{user.name}</span>
            </button>
          ))}
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: 'linear-gradient(135deg, #2a2547 0%, #3a3557 100%)',
          borderRadius: '12px',
          fontSize: '11px',
          color: '#999',
          lineHeight: '1.8',
          border: '1px solid #c8b6ff30',
        }}>
          <div style={{ marginBottom: '12px', fontSize: '13px', fontWeight: 'bold', color: '#c8b6ff', textTransform: 'uppercase', letterSpacing: '1px' }}>
            📋 Test Accounts
          </div>
          {USERS.map((user) => (
            <div key={user.email} style={{
              padding: '8px 12px',
              marginBottom: '6px',
              background: `${user.color}15`,
              borderRadius: '6px',
              borderLeft: `3px solid ${user.color}`,
              color: '#ddd',
              fontSize: '10px',
            }}>
              <div style={{ fontWeight: 'bold', color: user.color }}>{user.emoji} {user.name}</div>
              <div>📧 {user.email}</div>
              <div>🔑 {user.password}</div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    </div>
  );
}
