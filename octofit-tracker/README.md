# OctoFit Tracker

This workspace contains a modern multi-tier OctoFit Tracker application.

Ports:
- Frontend (Vite): 5173
- Backend (Express): 8000
- MongoDB: 27017

Folders:
- `octofit-tracker/frontend` — Vite + React 19 frontend
- `octofit-tracker/backend` — Node.js + Express + TypeScript backend (Mongoose)

To start locally:

1. Install frontend deps and run dev server:

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

2. Install backend deps and run dev server:

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

Ensure MongoDB is running on port 27017 (default).
