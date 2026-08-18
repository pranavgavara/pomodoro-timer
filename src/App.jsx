import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import LoginPage from './LoginPage';
import PomodoroTimer from './PomodoroTimer';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0f0f1e', color: '#c8b6ff', fontFamily: '"Fredoka One", sans-serif', fontSize: '18px' }}>
        Loading...
      </div>
    );
  }

  if (!currentUser) {
    return <LoginPage />;
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleLogout}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          background: '#c8b6ff',
          color: '#0f0f1e',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontFamily: 'inherit',
          zIndex: 1000,
        }}
      >
        Logout
      </button>
      <PomodoroTimer user={currentUser} />
    </div>
  );
}
