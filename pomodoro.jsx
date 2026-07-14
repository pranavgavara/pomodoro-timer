import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  // Timer state
  const [isWork, setIsWork] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsToday, setSessionsToday] = useState(0);
  const [streak, setStreak] = useState(0);
  
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pomodoroData');
    if (saved) {
      const { sessions, streak, lastDate } = JSON.parse(saved);
      const today = new Date().toDateString();
      
      if (lastDate === today) {
        setSessionsToday(sessions);
        setStreak(streak);
      } else {
        // New day: if yesterday was active, increment streak
        if (sessions > 0) {
          setStreak(streak + 1);
        }
        setSessionsToday(0);
      }
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    localStorage.setItem(
      'pomodoroData',
      JSON.stringify({ sessions: sessionsToday, streak, lastDate: today })
    );
  }, [sessionsToday, streak]);

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Timer complete
          playSound();
          if (isWork) {
            setSessionsToday((s) => s + 1);
          }
          setIsWork(!isWork);
          return isWork ? BREAK_TIME : WORK_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isWork]);

  const playSound = () => {
    // Create a simple beep using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const toggleTimer = () => setIsRunning(!isRunning);
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isWork ? WORK_TIME : BREAK_TIME);
  };

  const skipSession = () => {
    if (isWork) {
      setSessionsToday((s) => s + 1);
    }
    setIsWork(!isWork);
    setTimeLeft(isWork ? BREAK_TIME : WORK_TIME);
    setIsRunning(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = isWork 
    ? 1 - (timeLeft / WORK_TIME)
    : 1 - (timeLeft / BREAK_TIME);

  const bgColor = isWork ? '#1a1f2e' : '#1a2e1f';
  const accentColor = isWork ? '#00d9ff' : '#4ade80';
  const darkAccent = isWork ? '#0099cc' : '#2d7a4a';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: bgColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: '#e5e7eb',
        padding: '20px',
        transition: 'background 0.6s ease',
      }}
    >
      {/* Header: Streak & Sessions */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: '#9ca3af',
        }}
      >
        <div>
          🔥 {streak} day streak
        </div>
        <div>
          {sessionsToday} sessions today
        </div>
      </div>

      {/* Main Timer Circle */}
      <div style={{ position: 'relative', marginBottom: '60px' }}>
        <svg
          width="240"
          height="240"
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Background circle */}
          <circle
            cx="120"
            cy="120"
            r="110"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="120"
            cy="120"
            r="110"
            fill="none"
            stroke={accentColor}
            strokeWidth="3"
            strokeDasharray={`${2 * Math.PI * 110}`}
            strokeDashoffset={`${2 * Math.PI * 110 * (1 - progress)}`}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.5s linear',
            }}
          />
        </svg>
        {/* Timer Display (centered in circle) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontFamily: '"Courier New", monospace',
              fontWeight: 'bold',
              color: accentColor,
              letterSpacing: '-2px',
              lineHeight: '1',
            }}
          >
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#9ca3af',
              marginTop: '8px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {isWork ? 'Focus Time' : 'Take a Break'}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '40px',
        }}
      >
        <button
          onClick={toggleTimer}
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: accentColor,
            color: '#1a1f2e',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => (e.target.style.background = darkAccent)}
          onMouseOut={(e) => (e.target.style.background = accentColor)}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: 'transparent',
            color: '#9ca3af',
            border: `1px solid #4b5563`,
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = accentColor;
            e.target.style.color = accentColor;
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = '#4b5563';
            e.target.style.color = '#9ca3af';
          }}
        >
          Reset
        </button>
        <button
          onClick={skipSession}
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: 'transparent',
            color: '#9ca3af',
            border: `1px solid #4b5563`,
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = accentColor;
            e.target.style.color = accentColor;
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = '#4b5563';
            e.target.style.color = '#9ca3af';
          }}
        >
          Skip
        </button>
      </div>

      {/* Footer info */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          fontSize: '12px',
          color: '#6b7280',
          textAlign: 'center',
        }}
      >
        Work: 25 min | Break: 5 min
      </div>
    </div>
  );
};

export default PomodoroTimer;
