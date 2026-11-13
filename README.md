# Quantum Technology Universal – MERN website

MongoDB + Express + React (Vite) + Node, styled with Tailwind CSS v4. Single-page site: Home, Services, Why us, Process, Blog and Contact are sections on one page.

## Pages
Home, About, Services (+ one page per service), Industries, Process, Our Work, Blog (+ posts), Contact, Privacy.
Edit all copy in `client/src/content.js`.

## Run locally
1. Install MongoDB locally (or use a free MongoDB Atlas URI).
2. `cp server/.env.example server/.env` and set `MONGO_URI`.
3. `npm run install:all`
4. `npm run dev`  → site at http://localhost:5173, API at http://localhost:5000

## Production
`npm run build` then `npm start` – Express serves the built React app and the API together on one port.

## What is in the database
- `inquiries` – every submission from the "Start Your Project" form (name, email, service, message).

Blog posts live in `server/data/posts.js`; edit them there (or move to a Mongo collection later).
