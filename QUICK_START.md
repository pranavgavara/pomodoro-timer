# Quick Start: Get Your Pomodoro App Online in 5 Minutes

## Step 1: Clone or Copy These Files
You have:
- `package.json`
- `vite.config.js`
- `index.html`
- `main.jsx`
- `App.jsx`
- `pomodoro.jsx`
- `index.css`
- `README.md`

Put them all in a folder called `pomodoro-timer`

## Step 2: Test Locally (2 min)
```bash
cd pomodoro-timer
npm install
npm run dev
```
Open http://localhost:5173 — you should see the timer.

Click Start, watch it count down. Perfect? Let's deploy.

## Step 3: Deploy to Vercel (2 min)
Two options:

### Option A: GitHub + Vercel (Recommended)
1. Create a GitHub repo called `pomodoro-timer`
2. Push these files to GitHub (`git push`)
3. Go to https://vercel.com/new
4. Import the repo
5. Click Deploy
6. Done. Vercel gives you a public URL instantly.

### Option B: Vercel CLI (Even faster)
```bash
npm i -g vercel
vercel
```
Follow prompts, pick a project name, done.

## Step 4: Share Your App
Your app now has a live URL like `pomodoro-timer-abc123.vercel.app`

- Works on iPhone, Android, desktop
- Persists data to browser storage
- Share the link anywhere

## Next: Customize
Edit `pomodoro.jsx` to:
- Change work/break times (lines: `const WORK_TIME = 25 * 60`)
- Tweak colors (search `accentColor`, `bgColor`)
- Add more features

Every time you push to GitHub, Vercel auto-deploys.

---

**That's it. You now have a public app you built.**

Next project idea: GitHub-connected habit tracker, voice journal, or that Simon Says game.
