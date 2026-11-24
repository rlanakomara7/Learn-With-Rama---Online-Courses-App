# Learn With Rama

A responsive website for an online programming course platform. It includes a landing page, a sign up / sign in flow, and a dashboard that is only accessible after login.

## Features

- Responsive layout for desktop, tablet, and mobile
- Navbar with animated underline links and a hamburger menu on small screens
- Landing page sections: Home, Courses, Tutors, Partners, and Contact
- Partner logos that scroll continuously (CSS marquee animation)
- Sign Up and Sign In pages with form validation
- Protected Dashboard page that redirects to Sign In when not logged in

## Tech Stack

- React
- React Router
- Vite
- Plain CSS

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/USERNAME/learn-with-rama.git
cd learn-with-rama

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── components/   # Reusable components (Navbar, Partners, ...)
├── pages/        # Home, SignUp, SignIn, Dashboard
├── styles/       # CSS files
├── utils/        # auth.js (sign up, sign in, sign out)
├── App.jsx       # Route definitions
└── main.jsx      # App entry point
```

## Authentication Note

This project is for learning purposes. Accounts are stored in the browser's `localStorage`, and passwords are saved as plain text. Do not use this approach in a real application. For production, use a backend or a service such as Firebase Authentication.

## Author

Made by Rama.
