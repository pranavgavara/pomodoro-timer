import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const USERS = ['GP47', 'Pri', 'Nikki', 'Sid'];
  const DEFAULT_HABITS = [
    { id: 1, name: 'Exercise', category: '💪' },
    { id: 2, name: 'Meditation', category: '🧘' },
    { id: 3, name: 'Reading', category: '📚' },
    { id: 4, name: 'Coding', category: '💻' },
    { id: 5, name: 'Sleep 8hrs', category: '😴' },
    { id: 6, name: 'Water intake', category: '💧' },
  ];

  // Timer state
  const [currentUser, setCurrentUser] = useState('GP47');
  const [activeTab, setActiveTab] = useState('habits'); // habits, pomodoro, leaderboard
  const [isWork, setIsWork] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [allUsers, setAllUsers] = useState({});
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);

  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  // Initialize data
  useEffect(() => {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('pomodoroData');

    let data = {};

    if (saved) {
      const parsed = JSON.parse(saved);
      const lastDate = parsed.lastDate;

      if (lastDate === today) {
        // Same day - load existing data
        data = parsed.users || {};
      } else {
        // New day - reset daily progress but keep streaks
        data = resetDailyData(parsed.users || {}, lastDate);
      }
    }

    // Ensure all users exist
    USERS.forEach((user) => {
      if (!data[user]) {
        data[user] = createNewUserData();
      }
    });

    setAllUsers(data);
    localStorage.setItem('pomodoroData', JSON.stringify({
      users: data,
      lastDate: today,
      currentUser,
    }));
  }, []);

  const createNewUserData = () => ({
    habits: DEFAULT_HABITS.map((h) => ({
      ...h,
      completed: false,
      streak: 0,
      bestStreak: 0,
    })),
    pomodoro: {
      sessions: 0,
      xp: 0,
      level: 1,
      dailyXP: 0,
      sessionsToday: 0,
    },
    stats: {
      completionPercentage: 0,
      perfectWeekCount: 0,
    },
  });

  const resetDailyData = (users, lastDate) => {
    const today = new Date().toDateString();
    const updated = { ...users };

    Object.keys(updated).forEach((user) => {
      updated[user].habits.forEach((habit) => {
        // If habit was completed yesterday, increment streak
        if (habit.completed) {
          habit.streak = (habit.streak || 0) + 1;
          habit.bestStreak = Math.max(habit.bestStreak || 0, habit.streak);
        } else {
          habit.streak = 0;
        }
        habit.completed = false;
      });

      // Reset daily Pomodoro stats
      updated[user].pomodoro.dailyXP = 0;
      updated[user].pomodoro.sessionsToday = 0;
    });

    return updated;
  };

  // Save data to localStorage
  const saveData = (newUsers = allUsers) => {
    const today = new Date().toDateString();
    localStorage.setItem('pomodoroData', JSON.stringify({
      users: newUsers,
      lastDate: today,
      currentUser,
    }));
  };

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          playSound();
          if (isWork) {
            const updated = { ...allUsers };
            updated[currentUser].pomodoro.sessions += 1;
            updated[currentUser].pomodoro.sessionsToday += 1;

            // XP: 10 base + 2x for first 3 sessions
            const bonus = updated[currentUser].pomodoro.sessionsToday <= 3 ? 10 : 0;
            const xpGain = 10 + bonus;
            updated[currentUser].pomodoro.xp += xpGain;
            updated[currentUser].pomodoro.dailyXP += xpGain;

            // Level up every 100 XP
            updated[currentUser].pomodoro.level = Math.floor(updated[currentUser].pomodoro.xp / 100) + 1;

            setAllUsers(updated);
            saveData(updated);
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
  }, [isRunning, isWork, currentUser, allUsers]);

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

  const toggleHabit = (habitId) => {
    const updated = { ...allUsers };
    const habit = updated[currentUser].habits.find((h) => h.id === habitId);
    if (habit) {
      habit.completed = !habit.completed;
      updateCompletionPercentage(updated);
      setAllUsers(updated);
      saveData(updated);
    }
  };

  const updateCompletionPercentage = (users) => {
    const completed = users[currentUser].habits.filter((h) => h.completed).length;
    users[currentUser].stats.completionPercentage = Math.round((completed / users[currentUser].habits.length) * 100);
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isWork ? WORK_TIME : BREAK_TIME);
  };

  const skipSession = () => {
    setIsWork(!isWork);
    setTimeLeft(isWork ? BREAK_TIME : WORK_TIME);
    setIsRunning(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = isWork ? 1 - (timeLeft / WORK_TIME) : 1 - (timeLeft / BREAK_TIME);

  const bgColor = '#000000';
  const accentColor = '#ff006e';
  const darkAccent = '#ff1493';

  const userData = allUsers[currentUser] || createNewUserData();
  const completedHabits = userData.habits.filter((h) => h.completed).length;

  return (
    <div style={{ minHeight: '100vh', background: bgColor, color: accentColor, fontFamily: '"Fredoka One", "Righteous", sans-serif' }}>
      <div id="notification-flash" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: accentColor, opacity: '0', pointerEvents: 'none', transition: 'opacity 0.3s ease', zIndex: 9999 }} />

      {showCompletionAnimation && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '120px', animation: 'float 1s ease-out forwards', pointerEvents: 'none', zIndex: 5000 }}>
          ✨
        </div>
      )}

      <style>{`
        @keyframes float { 0% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 100% { transform: translate(-50%, -150%) scale(0); opacity: 0; } }
      `}</style>

      {/* User Selector */}
      <div style={{ padding: '20px', display: 'flex', gap: '10px', borderBottom: `2px solid ${accentColor}` }}>
        {USERS.map((user) => (
          <button
            key={user}
            onClick={() => setCurrentUser(user)}
            style={{
              padding: '10px 20px',
              background: currentUser === user ? accentColor : 'transparent',
              color: currentUser === user ? '#000' : accentColor,
              border: `2px solid ${accentColor}`,
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '14px',
            }}
          >
            {user}
          </button>
        ))}
      </div>

      {/* Tab Navigation */}
      <div style={{ padding: '15px', display: 'flex', gap: '10px', borderBottom: `2px solid #333` }}>
        {[
          { id: 'habits', label: '🎯 Habits' },
          { id: 'pomodoro', label: '⏱️ Pomodoro' },
          { id: 'leaderboard', label: '🏆 Leaderboard' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px',
              background: activeTab === tab.id ? accentColor : 'transparent',
              color: activeTab === tab.id ? '#000' : accentColor,
              border: `2px solid ${accentColor}`,
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '14px',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* HABITS TAB */}
      {activeTab === 'habits' && (
        <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            {currentUser}'s Daily Habits
          </div>
          <div style={{ fontSize: '14px', color: '#999', marginBottom: '30px' }}>
            Completion: {userData.stats.completionPercentage}% ({completedHabits}/{userData.habits.length})
          </div>

          {userData.habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              style={{
                padding: '15px',
                marginBottom: '10px',
                background: habit.completed ? accentColor : '#222',
                color: habit.completed ? '#000' : accentColor,
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: `2px solid ${accentColor}`,
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>{habit.category}</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{habit.name}</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Streak: {habit.streak}</div>
                </div>
              </div>
              <div style={{ fontSize: '24px' }}>{habit.completed ? '✅' : '⭕'}</div>
            </div>
          ))}

          {completedHabits >= Math.ceil(userData.habits.length * 0.7) && (
            <div style={{ marginTop: '30px', padding: '15px', background: '#2d5f2e', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' }}>
              🏆 Daily Goal Met! 70%+ habits completed
            </div>
          )}
        </div>
      )}

      {/* POMODORO TAB */}
      {activeTab === 'pomodoro' && (
        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* XP & Level */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: accentColor }}>Level {userData.pomodoro.level}</div>
            <div style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>Today: {userData.pomodoro.dailyXP} XP | Sessions: {userData.pomodoro.sessionsToday}</div>

            {/* XP Bar */}
            <div style={{ width: '300px', height: '15px', background: '#333', borderRadius: '10px', margin: '15px auto', border: `2px solid ${accentColor}`, overflow: 'hidden' }}>
              <div style={{ width: `${(userData.pomodoro.xp % 100)}%`, height: '100%', background: accentColor, transition: 'width 0.3s' }} />
            </div>
            <div style={{ fontSize: '12px' }}>{userData.pomodoro.xp % 100}/100 XP</div>
          </div>

          {/* Timer Circle */}
          <div style={{ position: 'relative', marginBottom: '60px' }}>
            <svg width="240" height="240" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="120" cy="120" r="110" fill="none" stroke="#374151" strokeWidth="2" />
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
                style={{ transition: 'stroke-dashoffset 0.5s linear' }}
              />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: 'bold', color: accentColor, fontFamily: 'monospace' }}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '12px', color: accentColor, marginTop: '8px', fontWeight: 'bold' }}>
                {isWork ? '🔥 FOCUS' : '☕ BREAK'}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
            <button
              onClick={toggleTimer}
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 'bold',
                background: accentColor,
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetTimer} style={{ padding: '12px 24px', fontSize: '14px', fontWeight: 'bold', background: 'transparent', color: accentColor, border: `2px solid ${accentColor}`, borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit' }}>
              Reset
            </button>
            <button onClick={skipSession} style={{ padding: '12px 24px', fontSize: '14px', fontWeight: 'bold', background: 'transparent', color: accentColor, border: `2px solid ${accentColor}`, borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit' }}>
              Skip
            </button>
          </div>
        </div>
      )}

      {/* LEADERBOARD TAB */}
      {activeTab === 'leaderboard' && (
        <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>🏆 Leaderboard</div>

          {/* Sessions Ranking */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>📊 Total Sessions</div>
            {USERS.map((user, idx) => {
              const userSessions = allUsers[user]?.pomodoro.sessions || 0;
              return (
                <div key={user} style={{ padding: '12px', marginBottom: '8px', background: '#222', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold' }}>#{idx + 1} {user}</span>
                  <span>{userSessions} sessions</span>
                </div>
              );
            })}
          </div>

          {/* XP Ranking */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>⭐ Total XP</div>
            {USERS.map((user, idx) => {
              const userXP = allUsers[user]?.pomodoro.xp || 0;
              return (
                <div key={user} style={{ padding: '12px', marginBottom: '8px', background: '#222', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold' }}>#{idx + 1} {user}</span>
                  <span>{userXP} XP (Level {Math.floor(userXP / 100) + 1})</span>
                </div>
              );
            })}
          </div>

          {/* Best Streaks */}
          <div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>🔥 Best Streaks</div>
            {USERS.map((user) => {
              const bestHabit = allUsers[user]?.habits.reduce((max, h) => (h.bestStreak > max.bestStreak ? h : max)) || {};
              return (
                <div key={user} style={{ padding: '12px', marginBottom: '8px', background: '#222', borderRadius: '8px' }}>
                  <span style={{ fontWeight: 'bold' }}>{user}</span>: {bestHabit.name} ({bestHabit.bestStreak} days)
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
