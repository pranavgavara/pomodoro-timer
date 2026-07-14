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
    try {
      // Try multiple beeps for phone compatibility
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();

      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();

          osc.connect(gain);
          gain.connect(audioContext.destination);

          osc.frequency.value = 900 + (i * 200);
          osc.type = 'sine';

          gain.gain.setValueAtTime(0.4, audioContext.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

          osc.start(audioContext.currentTime);
          osc.stop(audioContext.currentTime + 0.3);
        }, i * 150);
      }

      // Visual feedback on phone
      showNotificationFlash();
    } catch (e) {
      console.log('Audio not available, showing visual notification');
      showNotificationFlash();
    }
  };

  const showNotificationFlash = () => {
    const flash = document.getElementById('notification-flash');
    if (flash) {
      flash.style.opacity = '1';
      setTimeout(() => {
        flash.style.opacity = '0';
      }, 300);
    }
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

  const bgColor = '#000000';
  const accentColor = '#ff006e';
  const darkAccent = '#ff1493';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: bgColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Fredoka One", "Righteous", sans-serif',
        color: accentColor,
        padding: '20px',
        transition: 'background 0.6s ease',
      }}
    >
      {/* Notification Flash */}
      <div
        id="notification-flash"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: accentColor,
          opacity: '0',
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 9999,
        }}
      />
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
          color: accentColor,
          fontWeight: 'bold',
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
              color: accentColor,
              marginTop: '8px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 'bold',
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
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: accentColor,
            color: '#000000',
            border: 'none',
            borderRadius: '8px',
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
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: 'transparent',
            color: accentColor,
            border: `2px solid ${accentColor}`,
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = darkAccent;
            e.target.style.color = darkAccent;
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = accentColor;
            e.target.style.color = accentColor;
          }}
        >
          Reset
        </button>
        <button
          onClick={skipSession}
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            background: 'transparent',
            color: accentColor,
            border: `2px solid ${accentColor}`,
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = darkAccent;
            e.target.style.color = darkAccent;
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = accentColor;
            e.target.style.color = accentColor;
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
          color: accentColor,
          textAlign: 'center',
          opacity: '0.8',
        }}
      >
        Work: 25 min | Break: 5 min
      </div>
    </div>
  );
};

export default PomodoroTimer;
