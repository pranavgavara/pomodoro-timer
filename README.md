# Pomodoro Timer

A focused, minimal Pomodoro timer app built with React. Track your focus sessions, maintain streaks, and stay productive.

## Features

✅ **25/5 Pomodoro cycles** — Standard work/break intervals  
✅ **Session counter** — Track today's completed sessions  
✅ **Streak counter** — Build momentum with consecutive days  
✅ **Circular progress** — Visual feedback as time ticks down  
✅ **Persistent storage** — Data saves to browser automatically  
✅ **Mobile-responsive** — Works on iPhone, Android, desktop  
✅ **Sound notification** — Audio alert when timer completes  
✅ **Keyboard-friendly** — Start/pause/skip via simple buttons  

## Design

Tech-forward minimal aesthetic: deep slate background with cyan work accent and green break accent. The circular progress ring is the signature element—quiet, focused, no distractions.

## Local Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Your app will be live at `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```

## Deploy to Vercel (Fastest Path)

### Option 1: One-Click Deploy (Recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. Done! Your app has a public URL instantly.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts. Your app will be live in 2 minutes.

### Option 3: Manual Netlify Deploy
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder into the deploy zone
4. Your app is public

## How It Works

**Work Session (25 min):**
- Timer runs, circular progress fills
- Background is deep slate + cyan accent
- When done: sound plays, session counter increments

**Break Session (5 min):**
- Background shifts to deep slate + green accent
- Time to rest and recharge
- After break, ready to start again

**Streak:**
- Increments each new day you complete at least 1 session
- Visible at top-left: "🔥 5 day streak"
- Resets if you miss a day

**Persistent Storage:**
- All data stored in browser's localStorage
- Survives page refresh, app restart
- Separate counter per day

## Customization Ideas

- Change WORK_TIME / BREAK_TIME constants (lines in pomodoro.jsx)
- Adjust colors (bgColor, accentColor, darkAccent)
- Add sound customization (different beep frequencies)
- Add long break (every 4th session)
- Add export/import stats
- Build a heatmap calendar view

## Next Steps

- **Host it:** Deploy to Vercel/Netlify (5 min)
- **Use it:** Run while going through Fast.ai lessons
- **Iterate:** Add features based on your own workflow
- **Convert to mobile:** Later, use React Native to build iOS/Android version
