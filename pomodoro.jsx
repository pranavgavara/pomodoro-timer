import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  // Timer state
  const [isWork, setIsWork] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsToday, setSessionsToday] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);
  const [currentPlant, setCurrentPlant] = useState(0);
  const [plantHealth, setPlantHealth] = useState(100);
  const [unlockedPlants, setUnlockedPlants] = useState([0]);
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const [newUnlock, setNewUnlock] = useState(null);

  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  // Plant varieties with unlock conditions
  const PLANTS = [
    { id: 0, name: '🌱 Seedling', emoji: '🌱', unlockAt: 0, color: '#90EE90' },
    { id: 1, name: '🌿 Sprout', emoji: '🌿', unlockAt: 5, color: '#7CB342' },
    { id: 2, name: '🌾 Plant', emoji: '🌾', unlockAt: 15, color: '#9CCC65' },
    { id: 3, name: '🌳 Tree', emoji: '🌳', unlockAt: 30, color: '#558B2F' },
    { id: 4, name: '🌲 Pine', emoji: '🌲', unlockAt: 50, color: '#2E7D32' },
    { id: 5, name: '🌴 Palm', emoji: '🌴', unlockAt: 100, color: '#1B5E20' },
  ];

  // Check for plant unlocks
  useEffect(() => {
    PLANTS.forEach((plant) => {
      if (totalSessions >= plant.unlockAt && !unlockedPlants.includes(plant.id)) {
        setUnlockedPlants((prev) => {
          const updated = [...prev, plant.id];
          setNewUnlock(plant);
          setTimeout(() => setNewUnlock(null), 3000);
          return updated;
        });
      }
    });
  }, [totalSessions]);

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pomodoroData');
    if (saved) {
      const { sessions, streak, lastDate, totalSessions: total, currentPlant: plant, plantHealth: health, unlockedPlants: unlocked } = JSON.parse(saved);
      const today = new Date().toDateString();

      if (lastDate === today) {
        setSessionsToday(sessions);
        setStreak(streak);
        setTotalSessions(total || 0);
        setCurrentPlant(plant || 0);
        setPlantHealth(health !== undefined ? health : 100);
        setUnlockedPlants(unlocked || [0]);
      } else {
        // New day: reset plant health, increment streak if active
        if (sessions > 0) {
          setStreak(streak + 1);
          setPlantHealth(100);
        } else {
          setPlantHealth(Math.max(0, health - 20));
        }
        setSessionsToday(0);
        setTotalSessions(total || 0);
        setCurrentPlant(plant || 0);
        setUnlockedPlants(unlocked || [0]);
      }
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    localStorage.setItem(
      'pomodoroData',
      JSON.stringify({
        sessions: sessionsToday,
        streak,
        lastDate: today,
        totalSessions,
        currentPlant,
        plantHealth,
        unlockedPlants,
      })
    );
  }, [sessionsToday, streak, totalSessions, currentPlant, plantHealth, unlockedPlants]);

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          playSound();
          if (isWork) {
            setSessionsToday((s) => s + 1);
            setTotalSessions((t) => t + 1);
            setPlantHealth((h) => Math.min(100, h + 15));
            setShowCompletionAnimation(true);
            setTimeout(() => setShowCompletionAnimation(false), 1000);
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
      setTotalSessions((t) => t + 1);
      setPlantHealth((h) => Math.max(0, h + 15));
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

  // Get current plant emoji
  const currentPlantData = PLANTS[currentPlant];

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

      {/* New Unlock Notification */}
      {newUnlock && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: accentColor,
            color: '#000000',
            padding: '40px 60px',
            borderRadius: '20px',
            textAlign: 'center',
            zIndex: 10000,
            animation: 'popIn 0.5s ease',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          🎉 Unlocked: {newUnlock.name}
        </div>
      )}

      {/* Completion Animation */}
      {showCompletionAnimation && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '120px',
            animation: 'float 1s ease-out forwards',
            pointerEvents: 'none',
            zIndex: 5000,
          }}
        >
          ✨
        </div>
      )}

      <style>{`
        @keyframes popIn {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1.1); }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes float {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -150%) scale(0); opacity: 0; }
        }
      `}</style>

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

      {/* Plant Display */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          animation: showCompletionAnimation ? 'pulse 0.6s ease' : 'none',
        }}
      >
        <div style={{ fontSize: '80px', marginBottom: '10px' }}>
          {currentPlantData.emoji}
        </div>
        <div style={{ fontSize: '14px', color: accentColor, fontWeight: 'bold' }}>
          {currentPlantData.name}
        </div>
        {/* Plant Health Bar */}
        <div
          style={{
            width: '200px',
            height: '12px',
            background: '#333333',
            borderRadius: '6px',
            margin: '10px auto 0',
            border: `2px solid ${accentColor}`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${plantHealth}%`,
              height: '100%',
              background: accentColor,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <div style={{ fontSize: '11px', color: '#999999', marginTop: '5px' }}>
          Health: {plantHealth}%
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

      {/* Plant Selection */}
      <div
        style={{
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '12px', color: '#999999', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>
          Your Garden
        </div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {PLANTS.map((plant) => (
            <button
              key={plant.id}
              onClick={() => unlockedPlants.includes(plant.id) && setCurrentPlant(plant.id)}
              style={{
                fontSize: '32px',
                background: unlockedPlants.includes(plant.id)
                  ? currentPlant === plant.id
                    ? accentColor
                    : 'transparent'
                  : '#444444',
                border: unlockedPlants.includes(plant.id)
                  ? `2px solid ${accentColor}`
                  : '2px solid #666666',
                padding: '8px 10px',
                borderRadius: '8px',
                cursor: unlockedPlants.includes(plant.id) ? 'pointer' : 'not-allowed',
                opacity: unlockedPlants.includes(plant.id) ? 1 : 0.5,
                transition: 'all 0.2s',
              }}
              title={unlockedPlants.includes(plant.id) ? plant.name : `Unlock at ${plant.unlockAt} sessions`}
            >
              {plant.emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: accentColor,
          marginBottom: '20px',
        }}
      >
        <div>Total Sessions: {totalSessions} | Unlocked Plants: {unlockedPlants.length}/6</div>
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
