import React, { useState, useEffect, useRef } from 'react';
import { database } from './firebase';
import { ref, onValue, set, update } from 'firebase/database';

const PomodoroTimer = ({ user }) => {
  const USERS = ['GP47', 'Pri', 'Nikki', 'Sid'];
  const DEFAULT_HABITS = [
    { id: 1, name: 'Exercise', category: '💪', type: 'pomodoro', sessionsRequired: 2 },
    { id: 2, name: 'AI Reading', category: '🤖', type: 'pomodoro', sessionsRequired: 1 },
    { id: 3, name: 'Sleep 8hrs', category: '😴', type: 'checkbox' },
    { id: 4, name: 'Brush Twice Daily', category: '🪥', type: 'checkbox' },
    { id: 5, name: 'Water Intake', category: '💧', type: 'counter', goal: 8 },
    { id: 6, name: 'Take Vitamins', category: '💊', type: 'checkbox' },
    { id: 7, name: 'Eat 2 Eggs', category: '🥚', type: 'checkbox' },
  ];

  // Will be set based on logged-in user
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('habits');
  const [isWork, setIsWork] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [allUsers, setAllUsers] = useState({});
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const [selectedHabitForPomodoro, setSelectedHabitForPomodoro] = useState(null);
  const [loading, setLoading] = useState(true);
  const migrationDoneRef = useRef(false);

  const [toasts, setToasts] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const prevDataRef = useRef({});
  const [timeUntilReset, setTimeUntilReset] = useState('');
  const [completionHistory, setCompletionHistory] = useState({});
  const [calendarView, setCalendarView] = useState('week');

  // Request browser notification permission
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        setNotificationsEnabled(true);
      } else if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          setNotificationsEnabled(true);
          showToast('🔔 Notifications enabled!', 'success');
        }
      }
    }
  };

  // Show toast notification
  const showToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now();
    const toast = { id, message, type };
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  // Show browser notification
  const showBrowserNotification = (title, options = {}) => {
    if (notificationsEnabled && 'Notification' in window) {
      new Notification(title, {
        icon: '🏆',
        badge: '🎯',
        requireInteraction: false,
        ...options,
      });
    }
  };

  // Monitor for changes in other users' data
  useEffect(() => {
    if (Object.keys(allUsers).length === 0) return;

    // Compare with previous data to detect changes
    Object.keys(allUsers).forEach((userName) => {
      if (userName === currentUser) return; // Skip current user

      const userData = allUsers[userName];
      const prevData = prevDataRef.current[userName];

      if (!prevData) {
        prevDataRef.current[userName] = JSON.parse(JSON.stringify(userData));
        return;
      }

      // Check if session count increased
      if (userData.pomodoro.sessions > prevData.pomodoro.sessions) {
        const message = `🎯 ${userName} just completed a session! Level ${userData.pomodoro.level} 🚀`;
        showToast(message, 'success');
        showBrowserNotification(`${userName} is crushing it! 🔥`, {
          body: `They just leveled up to Level ${userData.pomodoro.level}!`,
          tag: 'session-complete',
        });
      }

      // Check if level increased
      if (userData.pomodoro.level > prevData.pomodoro.level) {
        const message = `⭐ ${userName} just leveled up to Level ${userData.pomodoro.level}! 🎉`;
        showToast(message, 'success');
        showBrowserNotification(`${userName} leveled up! ⭐`, {
          body: `Now at Level ${userData.pomodoro.level}. Can you keep up?`,
          tag: 'level-up',
        });
      }

      // Check if habit completed
      const completedHabits = userData.habits.filter((h) => h.completed);
      const prevCompletedHabits = prevData.habits.filter((h) => h.completed);
      if (completedHabits.length > prevCompletedHabits.length) {
        const newCompleted = completedHabits.find((h) => !prevCompletedHabits.includes(h));
        if (newCompleted) {
          const message = `💪 ${userName} completed ${newCompleted.category} ${newCompleted.name}!`;
          showToast(message, 'info');
          showBrowserNotification(`${userName} is staying on track! 💪`, {
            body: `Completed: ${newCompleted.name}`,
            tag: 'habit-complete',
          });
        }
      }

      // Check if daily goal reached
      if (userData.stats.completionPercentage >= 70 && prevData.stats.completionPercentage < 70) {
        const message = `🏆 ${userName} hit their daily goal! 70%+ complete 🎉`;
        showToast(message, 'success');
        showBrowserNotification(`${userName} crushed today's goal! 🏆`, {
          body: 'They hit 70% completion. Don\'t fall behind!',
          tag: 'daily-goal',
        });
      }

      prevDataRef.current[userName] = JSON.parse(JSON.stringify(userData));
    });
  }, [allUsers, currentUser, notificationsEnabled]);
  // Calculate time until daily reset (midnight)
  useEffect(() => {
    const updateResetTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const timeLeft = tomorrow - now;
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      setTimeUntilReset(`${hours}h ${minutes}m ${seconds}s`);
    };
    
    updateResetTimer();
    const interval = setInterval(updateResetTimer, 1000);
    return () => clearInterval(interval);
  }, []);



  const intervalRef = useRef(null);

  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  // Get user display name from email
  const getUserName = (userEmail) => {
    const emailPrefix = userEmail.split('@')[0];
    return USERS.find((u) => u.toLowerCase() === emailPrefix.toLowerCase()) || emailPrefix;
  };

  const userDisplayName = getUserName(user.email);
  // Set current user to logged-in user
  useEffect(() => {
    setCurrentUser(userDisplayName);
  }, [userDisplayName]);


  // Load data from Firebase
  useEffect(() => {
    const usersRef = ref(database, 'users');

    // Set a timeout to prevent infinite loading
    const loadTimeout = setTimeout(() => {
      console.warn('Firebase loading timeout - initializing locally');
      const newData = {};
      USERS.forEach((userName) => {
        newData[userName] = createNewUserData();
      });
      setAllUsers(newData);
      setLoading(false);
    }, 5000);

    const unsubscribe = onValue(usersRef, (snapshot) => {
      clearTimeout(loadTimeout);
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Migration: ensure all habits have proper structure (only once)
        if (!migrationDoneRef.current) {
          migrationDoneRef.current = true;
          let needsSave = false;
          USERS.forEach((userName) => {
            if (data[userName]) {
              // Ensure all habits have required fields from DEFAULT_HABITS
              data[userName].habits = data[userName].habits.map((habit) => {
                const defaultHabit = DEFAULT_HABITS.find((h) => h.id === habit.id);
                if (defaultHabit && (!habit.type || !habit.category || !habit.name)) {
                  needsSave = true;
                  return { ...defaultHabit, ...habit };
                }
                return habit;
              });
              // Add missing habits
              const existingHabitIds = new Set(data[userName].habits.map((h) => h.id));
              DEFAULT_HABITS.forEach((defaultHabit) => {
                if (!existingHabitIds.has(defaultHabit.id)) {
                  needsSave = true;
                  data[userName].habits.push({
                    ...defaultHabit,
                    completed: false,
                    streak: 0,
                    bestStreak: 0,
                    count: 0,
                    sessionsCompleted: 0,
                  });
                }
              });
            }
          });
          if (needsSave) {
            set(usersRef, data).catch((err) => console.error('Error saving migrated data:', err));
          }
        }
        setAllUsers(data);
      } else {
        // Initialize if no data
        const newData = {};
        USERS.forEach((userName) => {
          newData[userName] = createNewUserData();
        });
        set(usersRef, newData).catch((err) => {
          console.error('Error initializing Firebase:', err);
          setAllUsers(newData);
        });
        setAllUsers(newData);
      }
      setLoading(false);
    }, (error) => {
      clearTimeout(loadTimeout);
      console.error('Firebase error:', error);
      // Initialize locally if Firebase fails
      const newData = {};
      USERS.forEach((userName) => {
        newData[userName] = createNewUserData();
      });
      setAllUsers(newData);
      setLoading(false);
    });

    return () => {
      clearTimeout(loadTimeout);
      unsubscribe();
    };
  }, []);
  // Save completion history when day changes
  const saveDailyCompletion = async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateStr = yesterday.toISOString().split('T')[0];
    
    // Save each user's completion status for yesterday
    Object.keys(allUsers).forEach((userName) => {
      const userData = allUsers[userName];
      const historyRef = ref(database, `history/${dateStr}/${userName}`);
      set(historyRef, {
        completed: userData.stats.completionPercentage >= 70,
        percentage: userData.stats.completionPercentage,
        timestamp: yesterday.toISOString(),
      }).catch((err) => console.error('Error saving history:', err));
    });
  };

  // Load completion history from Firebase
  useEffect(() => {
    const historyRef = ref(database, 'history');

    const unsubscribe = onValue(historyRef, (snapshot) => {
      if (snapshot.exists()) {
        setCompletionHistory(snapshot.val());
      }
    }, (error) => {
      console.error('Error loading history:', error);
    });

    return () => unsubscribe();
  }, []);

  // Daily reset at midnight
  useEffect(() => {
    if (!currentUser || Object.keys(allUsers).length === 0) return;

    const checkAndReset = () => {
      const lastResetDate = localStorage.getItem('lastResetDate');
      const today = new Date().toISOString().split('T')[0];

      if (lastResetDate !== today) {
        console.log('Performing daily reset...');
        saveDailyCompletion();

        const updated = JSON.parse(JSON.stringify(allUsers));
        USERS.forEach((userName) => {
          if (updated[userName]) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];
            const yesterdayData = completionHistory[yesterdayStr];
            const wasCompleted = yesterdayData?.[userName]?.completed || false;

            updated[userName].habits.forEach((habit) => {
              if (habit.type === 'checkbox' || habit.type === 'counter') {
                habit.completed = false;
                if (habit.type === 'counter') habit.count = 0;
                if (wasCompleted) {
                  habit.streak = (habit.streak || 0) + 1;
                  habit.bestStreak = Math.max(habit.bestStreak || 0, habit.streak);
                } else {
                  habit.streak = 0;
                }
              } else if (habit.type === 'pomodoro') {
                habit.sessionsCompleted = 0;
                habit.completed = false;
                if (wasCompleted) {
                  habit.streak = (habit.streak || 0) + 1;
                  habit.bestStreak = Math.max(habit.bestStreak || 0, habit.streak);
                } else {
                  habit.streak = 0;
                }
              }
            });

            updated[userName].pomodoro.sessionsToday = 0;
            updated[userName].pomodoro.dailyXP = 0;
            updated[userName].stats.completionPercentage = 0;

            saveToFirebase(userName, updated[userName]);
          }
        });

        setAllUsers(updated);
        localStorage.setItem('lastResetDate', today);
        showToast('📅 Daily reset! New habits unlocked for today', 'success');
      }
    };

    checkAndReset();
    const interval = setInterval(checkAndReset, 60000);
    return () => clearInterval(interval);
  }, [currentUser, allUsers, completionHistory]);


  const createNewUserData = () => ({
    habits: DEFAULT_HABITS.map((h) => ({
      ...h,
      completed: false,
      streak: 0,
      bestStreak: 0,
      count: 0,
      sessionsCompleted: 0,
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

  const saveToFirebase = (userName, userData) => {
    const userRef = ref(database, `users/${userName}`);
    set(userRef, userData);
  };

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          playSound();
          if (isWork && selectedHabitForPomodoro) {
            const updated = JSON.parse(JSON.stringify(allUsers));
            const habit = updated[currentUser].habits.find((h) => h.id === selectedHabitForPomodoro);

            if (habit && habit.type === 'pomodoro') {
              habit.sessionsCompleted = (habit.sessionsCompleted || 0) + 1;
              if (habit.sessionsCompleted >= habit.sessionsRequired) {
                habit.completed = true;
              }
            }

            updated[currentUser].pomodoro.sessions += 1;
            updated[currentUser].pomodoro.sessionsToday += 1;

            const bonus = updated[currentUser].pomodoro.sessionsToday <= 3 ? 10 : 0;
            const xpGain = 10 + bonus;
            updated[currentUser].pomodoro.xp += xpGain;
            updated[currentUser].pomodoro.dailyXP += xpGain;
            updated[currentUser].pomodoro.level = Math.floor(updated[currentUser].pomodoro.xp / 100) + 1;

            updateCompletionPercentage(updated);
            setAllUsers(updated);
            saveToFirebase(currentUser, updated[currentUser]);
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
  }, [isRunning, isWork, currentUser, selectedHabitForPomodoro, allUsers]);

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
    if (!currentUser) return;
    const updated = JSON.parse(JSON.stringify(allUsers));
    if (!updated[currentUser]) return;

    const habit = updated[currentUser].habits.find((h) => h.id === habitId);
    if (habit && habit.type === 'checkbox') {
      const wasCompleted = habit.completed;
      habit.completed = !habit.completed;

      // Award XP when marking habit as complete (not when unchecking)
      if (!wasCompleted && habit.completed) {
        updated[currentUser].pomodoro.xp += 5;
        updated[currentUser].pomodoro.dailyXP += 5;
        updated[currentUser].pomodoro.level = Math.floor(updated[currentUser].pomodoro.xp / 100) + 1;
        showToast(`✅ ${habit.name} completed! +5 XP`, 'success');
      }

      updateCompletionPercentage(updated);
      setAllUsers(updated);
      saveToFirebase(currentUser, updated[currentUser]);
    }
  };

  const updateWaterCount = (habitId, delta) => {
    if (!currentUser) return;
    const updated = JSON.parse(JSON.stringify(allUsers));
    if (!updated[currentUser]) return;

    const habit = updated[currentUser].habits.find((h) => h.id === habitId);
    if (habit && habit.type === 'counter') {
      const wasCompleted = habit.completed;
      habit.count = Math.max(0, habit.count + delta);
      habit.completed = habit.count >= (habit.goal || 8);

      // Award XP when reaching goal for first time
      if (!wasCompleted && habit.completed) {
        updated[currentUser].pomodoro.xp += 5;
        updated[currentUser].pomodoro.dailyXP += 5;
        updated[currentUser].pomodoro.level = Math.floor(updated[currentUser].pomodoro.xp / 100) + 1;
        showToast(`✅ ${habit.name} goal reached! +5 XP`, 'success');
      }

      updateCompletionPercentage(updated);
      setAllUsers(updated);
      saveToFirebase(currentUser, updated[currentUser]);
    }
  };

  const addPomodoroSession = (habitId) => {
    if (!currentUser) return;
    const updated = JSON.parse(JSON.stringify(allUsers));
    if (!updated[currentUser]) return;

    const habit = updated[currentUser].habits.find((h) => h.id === habitId);
    if (habit && habit.type === 'pomodoro') {
      habit.sessionsCompleted = (habit.sessionsCompleted || 0) + 1;
      if (habit.sessionsCompleted >= habit.sessionsRequired) {
        habit.completed = true;
      }

      updated[currentUser].pomodoro.sessions += 1;
      updated[currentUser].pomodoro.sessionsToday += 1;

      const bonus = updated[currentUser].pomodoro.sessionsToday <= 3 ? 10 : 0;
      const xpGain = 10 + bonus;
      updated[currentUser].pomodoro.xp += xpGain;
      updated[currentUser].pomodoro.dailyXP += xpGain;
      updated[currentUser].pomodoro.level = Math.floor(updated[currentUser].pomodoro.xp / 100) + 1;

      updateCompletionPercentage(updated);
      setAllUsers(updated);
      saveToFirebase(currentUser, updated[currentUser]);

      playSound();
      showToast(`✅ ${habit.name} session added! +${xpGain} XP`, 'success');
    }
  };

  const removePomodoroSession = (habitId) => {
    if (!currentUser) return;
    const updated = JSON.parse(JSON.stringify(allUsers));
    if (!updated[currentUser]) return;

    const habit = updated[currentUser].habits.find((h) => h.id === habitId);
    if (habit && habit.type === 'pomodoro' && habit.sessionsCompleted > 0) {
      habit.sessionsCompleted -= 1;
      if (habit.sessionsCompleted < habit.sessionsRequired) {
        habit.completed = false;
      }

      updated[currentUser].pomodoro.sessions = Math.max(0, updated[currentUser].pomodoro.sessions - 1);
      updated[currentUser].pomodoro.sessionsToday = Math.max(0, updated[currentUser].pomodoro.sessionsToday - 1);

      const bonus = (updated[currentUser].pomodoro.sessionsToday + 1) <= 3 ? 10 : 0;
      const xpGain = 10 + bonus;
      updated[currentUser].pomodoro.xp = Math.max(0, updated[currentUser].pomodoro.xp - xpGain);
      updated[currentUser].pomodoro.dailyXP = Math.max(0, updated[currentUser].pomodoro.dailyXP - xpGain);
      updated[currentUser].pomodoro.level = Math.floor(updated[currentUser].pomodoro.xp / 100) + 1;

      updateCompletionPercentage(updated);
      setAllUsers(updated);
      saveToFirebase(currentUser, updated[currentUser]);

      showToast(`↶ ${habit.name} session removed! -${xpGain} XP`, 'info');
    }
  };

  const updateCompletionPercentage = (users) => {
    const completed = users[currentUser].habits.filter((h) => h.completed).length;
    users[currentUser].stats.completionPercentage = Math.round((completed / users[currentUser].habits.length) * 100);
  };

  const toggleTimer = () => {
    if (!isRunning && isWork && !selectedHabitForPomodoro) {
      alert('Select a habit first!');
      return;
    }
    setIsRunning(!isRunning);
  };

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

  const bgColor = '#0f0f1e';
  const accentColor = '#c8b6ff';
  const darkAccent = '#a78bde';

  if (loading) {
    return <div style={{ minHeight: '100vh', background: bgColor, color: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit' }}>Loading...</div>;
  }

  const userData = allUsers[currentUser] || createNewUserData();
  const completedHabits = userData.habits.filter((h) => h.completed).length;
  const selectedHabit = userData.habits.find((h) => h.id === selectedHabitForPomodoro);

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

      {/* Header - Show logged in user */}
      <div style={{ padding: '20px', borderBottom: `2px solid #333333`, textAlign: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: accentColor }}>
          Welcome, <span style={{ fontSize: '20px' }}>{userDisplayName}</span>! 👋
        </div>
        <button
          onClick={requestNotificationPermission}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            background: notificationsEnabled ? accentColor : '#1a1a2e',
            color: notificationsEnabled ? '#0f0f1e' : accentColor,
            border: `2px solid ${accentColor}`,
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '12px',
          }}
        >
          {notificationsEnabled ? '🔔 Notifications On' : '🔕 Enable Notifications'}
        </button>
        <div style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>
          Only your data is editable. View others' progress below.
        </div>
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
              color: activeTab === tab.id ? '#0f0f1e' : accentColor,
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
              style={{
                padding: '15px',
                marginBottom: '10px',
                background: habit.completed ? accentColor : '#1a1a2e',
                color: habit.completed ? '#0f0f1e' : accentColor,
                borderRadius: '10px',
                cursor: habit.type === 'checkbox' ? 'pointer' : 'default',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: `2px solid ${accentColor}`,
                transition: 'all 0.2s',
              }}
              onClick={() => habit.type === 'checkbox' && toggleHabit(habit.id)}
            >
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flex: 1 }}>
                <span style={{ fontSize: '24px' }}>{habit.category}</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{habit.name}</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>
                    Streak: {habit.streak} | Best: {habit.bestStreak}
                  </div>
                  {habit.type === 'pomodoro' && (
                    <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>
                      Sessions: {habit.sessionsCompleted}/{habit.sessionsRequired}
                    </div>
                  )}
                </div>
              </div>

              {habit.type === 'checkbox' && (
                <div style={{ fontSize: '24px' }}>{habit.completed ? '✅' : '⭕'}</div>
              )}

              {habit.type === 'pomodoro' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '60px',
                    height: '8px',
                    background: '#333',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: `1px solid ${accentColor}`,
                  }}>
                    <div
                      style={{
                        width: `${(habit.sessionsCompleted / habit.sessionsRequired) * 100}%`,
                        height: '100%',
                        background: accentColor,
                        transition: 'width 0.3s',
                      }}
                    />
                  </div>
                  <span style={{ minWidth: '30px', textAlign: 'center', fontSize: '12px' }}>
                    {habit.sessionsCompleted}/{habit.sessionsRequired}
                  </span>
                  {habit.sessionsCompleted < habit.sessionsRequired && (
                    <button
                      onClick={() => addPomodoroSession(habit.id)}
                      style={{
                        padding: '6px 12px',
                        background: 'transparent',
                        color: accentColor,
                        border: `2px solid ${accentColor}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        fontFamily: 'inherit',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ✓ Add
                    </button>
                  )}
                  {habit.sessionsCompleted > 0 && (
                    <button
                      onClick={() => removePomodoroSession(habit.id)}
                      style={{
                        padding: '6px 12px',
                        background: 'transparent',
                        color: '#ff6b6b',
                        border: '2px solid #ff6b6b',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        fontFamily: 'inherit',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ↶ Undo
                    </button>
                  )}
                </div>
              )}

              {habit.type === 'counter' && (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button
                    onClick={() => updateWaterCount(habit.id, -1)}
                    style={{
                      width: '30px',
                      height: '30px',
                      background: 'transparent',
                      border: `2px solid ${habit.completed ? '#0f0f1e' : accentColor}`,
                      color: habit.completed ? '#0f0f1e' : accentColor,
                      borderRadius: '50%',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                    }}
                  >
                    −
                  </button>
                  <div style={{ minWidth: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
                    {habit.count}/{habit.goal}
                  </div>
                  <button
                    onClick={() => updateWaterCount(habit.id, 1)}
                    style={{
                      width: '30px',
                      height: '30px',
                      background: habit.count >= habit.goal ? '#0f0f1e' : 'transparent',
                      border: `2px solid ${habit.completed ? '#0f0f1e' : accentColor}`,
                      color: habit.completed ? '#0f0f1e' : accentColor,
                      borderRadius: '50%',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}

          {completedHabits >= Math.ceil(userData.habits.length * 0.7) && (
            <div style={{ marginTop: '30px', padding: '15px', background: '#2a2547', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold', border: `2px solid ${accentColor}` }}>
              🏆 Daily Goal Met! 70%+ habits completed
            </div>
          )}

          {/* View Others Section */}
          <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: `2px solid #333` }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: accentColor }}>
              👥 Others' Progress (Read-Only)
            </div>
            {USERS.filter((u) => u !== currentUser).map((otherUser) => {
              const otherData = allUsers[otherUser] || createNewUserData();
              const otherCompleted = otherData.habits.filter((h) => h.completed).length;
              return (
                <div key={otherUser} style={{
                  padding: '15px',
                  marginBottom: '15px',
                  background: '#1a1a2e',
                  borderRadius: '10px',
                  border: `1px solid #333`,
                }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '10px', color: accentColor }}>
                    {otherUser}
                  </div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
                    Completion: {otherData.stats.completionPercentage}% ({otherCompleted}/{otherData.habits.length}) | Level: {otherData.pomodoro.level}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {otherData.habits.map((habit) => (
                      <div key={habit.id} style={{
                        padding: '6px 12px',
                        background: habit.completed ? accentColor : '#0f0f1e',
                        color: habit.completed ? '#0f0f1e' : accentColor,
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                      }}>
                        {habit.category} {habit.completed ? '✅' : '⭕'}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* POMODORO TAB */}
      {activeTab === 'pomodoro' && (
        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center', width: '100%', maxWidth: '400px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', color: '#999' }}>
              SELECT HABIT TO WORK ON
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              {userData.habits.filter((h) => h.type === 'pomodoro').map((habit) => (
                <button
                  key={habit.id}
                  onClick={() => setSelectedHabitForPomodoro(habit.id)}
                  style={{
                    padding: '10px 15px',
                    background: selectedHabitForPomodoro === habit.id ? accentColor : '#1a1a2e',
                    color: selectedHabitForPomodoro === habit.id ? '#0f0f1e' : accentColor,
                    border: `2px solid ${accentColor}`,
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '12px',
                  }}
                >
                  {habit.category} {habit.name}
                </button>
              ))}
            </div>
            {selectedHabit && (
              <div style={{ marginTop: '15px', fontSize: '14px', color: accentColor }}>
                Working on: <strong>{selectedHabit.category} {selectedHabit.name}</strong>
                <div style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>
                  Progress: {selectedHabit.sessionsCompleted}/{selectedHabit.sessionsRequired} sessions
                </div>
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: accentColor }}>Level {userData.pomodoro.level}</div>
            <div style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>Today: {userData.pomodoro.dailyXP} XP | Sessions: {userData.pomodoro.sessionsToday}</div>

            <div style={{ width: '300px', height: '15px', background: '#333', borderRadius: '10px', margin: '15px auto', border: `2px solid ${accentColor}`, overflow: 'hidden' }}>
              <div style={{ width: `${(userData.pomodoro.xp % 100)}%`, height: '100%', background: accentColor, transition: 'width 0.3s' }} />
            </div>
            <div style={{ fontSize: '12px' }}>{userData.pomodoro.xp % 100}/100 XP</div>
          </div>

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

          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
            <button
              onClick={toggleTimer}
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 'bold',
                background: accentColor,
                color: '#0f0f1e',
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

          <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
            Only completed sessions count. Skipping doesn't log to habits.
          </div>

          {/* View Others' XP */}
          <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: `2px solid #333`, maxWidth: '400px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', color: accentColor }}>
              👥 Others' XP (Real-Time)
            </div>
            {USERS.filter((u) => u !== currentUser).map((otherUser) => {
              const otherData = allUsers[otherUser] || createNewUserData();
              return (
                <div key={otherUser} style={{
                  padding: '12px',
                  marginBottom: '10px',
                  background: '#1a1a2e',
                  borderRadius: '8px',
                  border: `1px solid #333`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontWeight: 'bold' }}>{otherUser}</span>
                  <span style={{ fontSize: '12px', color: '#999' }}>
                    Level {otherData.pomodoro.level} • {otherData.pomodoro.xp} XP
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

            {/* LEADERBOARD TAB */}
      {activeTab === 'leaderboard' && (
        <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: accentColor }}>🏆 Leaderboard</div>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Real-Time Rankings & Completion Tracking</div>

          {/* XP Rules Legend */}
          <div style={{ marginBottom: '30px', background: '#1a1a2e', padding: '15px', borderRadius: '12px', border: `2px solid #7FFF00` }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px', color: '#7FFF00' }}>⚡ How to Gain XP</div>
            <div style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '8px' }}>✓ <strong>Base XP:</strong> +10 XP per session (timer or manual)</div>
              <div style={{ marginBottom: '8px' }}>🔥 <strong>Bonus XP:</strong> +10 extra XP for first 3 sessions of the day (total +20)</div>
              <div style={{ marginBottom: '8px' }}>📈 <strong>Leveling:</strong> 100 XP = 1 Level</div>
              <div>💪 <strong>Daily Goal:</strong> Complete 70%+ of habits to hit daily completion target</div>
            </div>
          </div>

          {/* Enhanced Calendar with History */}
          <div style={{ marginBottom: '40px', background: '#1a1a2e', padding: '20px', borderRadius: '12px', border: `2px solid ${accentColor}` }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: accentColor }}>📅 Completion Calendar</div>

            {/* View Toggle */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button
                onClick={() => setCalendarView('week')}
                style={{
                  padding: '8px 16px',
                  background: calendarView === 'week' ? accentColor : '#0f0f1e',
                  color: calendarView === 'week' ? '#0f0f1e' : accentColor,
                  border: `2px solid ${accentColor}`,
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '12px',
                }}
              >
                This Week
              </button>
              <button
                onClick={() => setCalendarView('month')}
                style={{
                  padding: '8px 16px',
                  background: calendarView === 'month' ? accentColor : '#0f0f1e',
                  color: calendarView === 'month' ? '#0f0f1e' : accentColor,
                  border: `2px solid ${accentColor}`,
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '12px',
                }}
              >
                Last 30 Days
              </button>
            </div>

            {/* Color Legend */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px', fontSize: '12px' }}>
              {[
                { name: 'GP47', color: '#FF6B9D' },
                { name: 'Pri', color: '#00D9FF' },
                { name: 'Nikki', color: '#FFAA00' },
                { name: 'Sid', color: '#7FFF00' },
              ].map((user) => (
                <div key={user.name} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: user.color }} />
                  <span>{user.name}</span>
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div style={{ background: '#0f0f1e', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
              {calendarView === 'week' && (
                <div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '10px', textTransform: 'uppercase' }}>This Week</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
                      const date = new Date();
                      date.setDate(date.getDate() - (date.getDay() - idx - 1 + 7) % 7);
                      const dateStr = date.toISOString().split('T')[0];
                      const dayHistory = completionHistory[dateStr] || {};

                      const userColors = {
                        'GP47': '#FF6B9D',
                        'Pri': '#00D9FF',
                        'Nikki': '#FFAA00',
                        'Sid': '#7FFF00',
                      };

                      return (
                        <div key={day} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '11px', color: '#999', marginBottom: '5px', fontWeight: 'bold' }}>{day}</div>
                          <div style={{
                            width: '100%',
                            aspectRatio: '1',
                            background: '#1a1a2e',
                            borderRadius: '8px',
                            border: `1px solid #333`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            padding: '4px',
                            gap: '2px',
                          }}>
                            {Object.keys(dayHistory).length > 0 ? (
                              Object.keys(dayHistory).map((userName) => (
                                dayHistory[userName].completed && (
                                  <div key={userName} style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '2px',
                                    background: userColors[userName],
                                  }} />
                                )
                              ))
                            ) : (
                              <span style={{ fontSize: '10px', color: '#666' }}>—</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {calendarView === 'month' && (
                <div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '10px', textTransform: 'uppercase' }}>Last 30 Days</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))', gap: '4px' }}>
                    {Array.from({ length: 30 }).map((_, i) => {
                      const date = new Date();
                      date.setDate(date.getDate() - (29 - i));
                      const dateStr = date.toISOString().split('T')[0];
                      const dayHistory = completionHistory[dateStr] || {};

                      const userColors = {
                        'GP47': '#FF6B9D',
                        'Pri': '#00D9FF',
                        'Nikki': '#FFAA00',
                        'Sid': '#7FFF00',
                      };

                      const completedCount = Object.keys(dayHistory).filter((u) => dayHistory[u].completed).length;

                      return (
                        <div key={dateStr} style={{
                          aspectRatio: '1',
                          background: completedCount === 4 ? '#2d5f2e' : completedCount >= 2 ? '#3a3a5f' : '#1a1a2e',
                          borderRadius: '4px',
                          border: `1px solid #333`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          padding: '2px',
                          gap: '1px',
                          title: `${dateStr}: ${completedCount} users completed`,
                        }}>
                          {completedCount > 0 ? (
                            Object.keys(dayHistory).map((userName) => (
                              dayHistory[userName].completed && (
                                <div key={userName} style={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '1px',
                                  background: userColors[userName],
                                }} />
                              )
                            ))
                          ) : (
                            <span style={{ fontSize: '8px', color: '#666' }}>·</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Today's Status */}
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: `1px solid #333` }}>
              <div style={{ fontSize: '13px', color: '#999', marginBottom: '10px', textTransform: 'uppercase' }}>Today's Progress</div>
              {USERS.map((userName) => {
                const userData = allUsers[userName] || createNewUserData();
                const isComplete = userData.stats.completionPercentage >= 70;
                const userColors = {
                  'GP47': '#FF6B9D',
                  'Pri': '#00D9FF',
                  'Nikki': '#FFAA00',
                  'Sid': '#7FFF00',
                };
                return (
                  <div key={userName} style={{
                    padding: '10px',
                    marginBottom: '8px',
                    background: '#0f0f1e',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${userColors[userName]}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span style={{ fontWeight: 'bold', color: userColors[userName] }}>{userName}</span>
                    <span style={{ fontSize: '12px', color: '#999' }}>
                      {userData.stats.completionPercentage}% {isComplete ? '✅' : '⏳'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Longest Streaks */}
          <div style={{ marginBottom: '40px', background: '#1a1a2e', padding: '20px', borderRadius: '12px', border: `2px solid ${accentColor}` }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: accentColor }}>🔥 Longest Active Streaks</div>
            {USERS.map((userName) => {
              const userHabits = allUsers[userName]?.habits || [];
              const longestHabit = userHabits.reduce((max, h) => (h.streak > max.streak ? h : max), { streak: 0, name: 'None' });
              return (
                <div key={userName} style={{ padding: '12px', marginBottom: '8px', background: '#0f0f1e', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold' }}>{userName}</span>
                  <span style={{ fontSize: '12px', color: '#999' }}>
                    {longestHabit.name} • <span style={{ color: accentColor, fontWeight: 'bold' }}>{longestHabit.streak} days 🔥</span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* Overall Level */}
          <div style={{ marginBottom: '40px', background: '#1a1a2e', padding: '20px', borderRadius: '12px', border: `2px solid ${accentColor}` }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: accentColor }}>⭐ Overall Level</div>
            {USERS.sort((a, b) => (allUsers[b]?.pomodoro.level || 1) - (allUsers[a]?.pomodoro.level || 1)).map((userName, idx) => {
              const userLevel = allUsers[userName]?.pomodoro.level || 1;
              const userXP = allUsers[userName]?.pomodoro.xp || 0;
              const medals = ['🥇', '🥈', '🥉'];
              return (
                <div key={userName} style={{ padding: '12px', marginBottom: '8px', background: '#0f0f1e', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{medals[idx] || '4️⃣'}</span>
                    <span style={{ fontWeight: 'bold' }}>{userName}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#999' }}>
                    Level <span style={{ color: accentColor, fontWeight: 'bold', fontSize: '14px' }}>{userLevel}</span> • {userXP} XP
                  </span>
                </div>
              );
            })}
          </div>

          {/* Achievements */}
          <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '12px', border: `2px solid ${accentColor}` }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: accentColor }}>🏅 Stats</div>
            {USERS.map((userName) => {
              const userData = allUsers[userName] || createNewUserData();
              const totalSessions = userData.pomodoro.sessions || 0;
              return (
                <div key={userName} style={{ padding: '12px', marginBottom: '8px', background: '#0f0f1e', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>{userName}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>💎 {totalSessions} total sessions | 🎯 {userData.pomodoro.dailyXP} XP today</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <div style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        zIndex: 10000,
        maxWidth: '350px',
      }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              padding: '15px 20px',
              marginBottom: '10px',
              background: toast.type === 'success' ? '#2d5f2e' : '#2a2547',
              border: `2px solid ${accentColor}`,
              borderRadius: '10px',
              color: accentColor,
              fontWeight: 'bold',
              fontSize: '14px',
              animation: 'slideIn 0.3s ease-out',
              boxShadow: `0 4px 20px ${accentColor}40`,
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(400px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PomodoroTimer;
