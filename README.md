<div align="center">

# 📔 Daily Diary · Journal App Frontend

**A private online journal: sign up, log in, and keep your daily entries behind JWT authentication.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

</div>

---

## About

This is the React frontend for **JournalApp**, a Spring Boot backend secured with Spring Security and JWT. Users create an account, sign in, write journal entries, and read their past entries. Every journal request carries the user's token, so each person only sees their own journal.

## Features

- 📝 **Sign up** with username, email and password
- 🔐 **Log in** with JWT: the token is saved in the browser and sent as a `Bearer` header on every journal request
- 🛡️ **Protected journal page:** users without a token are sent back to login
- ✍️ **Write entries** and see the list update right away
- 📚 **Previous entries** loaded from the API
- 🚪 **Log out** clears the token
- 🎨 **Split-screen auth pages** with an orange-to-green gradient brand, styled with Tailwind

## Pages

| Route | Page |
| --- | --- |
| `/`, `/login` | Login |
| `/signup` | Create an account |
| `/journal` | Your journal (requires login) |

## API used

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| `POST` | `/journal/public/signup` | — | Create an account |
| `POST` | `/journal/public/login` | — | Log in, returns a JWT |
| `GET` | `/journal/Journal` | Bearer | Get your entries |
| `POST` | `/journal/Journal` | Bearer | Add an entry: `{ "content": "..." }` |

## Getting started

**Requirements:** Node.js 18+ and the JournalApp Spring Boot backend running on `http://localhost:8080`.

```bash
git clone https://github.com/Farhan7-tech/Journal-App-Frontend.git
cd Journal-App-Frontend
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── App.jsx                   # Routes
├── main.jsx                  # React entry point
├── assets/                   # Illustration for the auth pages
└── components/
    ├── LoginPage.jsx         # Login, stores the JWT
    ├── SignUpPage.jsx        # Registration
    └── JournalPage.jsx       # Protected journal: write and list entries
```

## Roadmap

- [ ] Wire up the "Sign in with Google" button (`@react-oauth/google` is already installed)
- [ ] Edit and delete entries
- [ ] Move the API base URL into an environment variable

---

<div align="center">
Built by <a href="https://github.com/Farhan7-tech">Mohd Farhan</a>
</div>
