# 🎨 Frontend Documentation

## Quiz Platform — v2.0 (Full Stack SaaS UI)

---

## 📌 Overview

The frontend of Quiz Platform is built using:

- **Next.js 16 (App Router)**
- **React**
- **Tailwind CSS**
- **Framer Motion (animations)**

It provides a clean, modern SaaS-style user interface with:

- Authentication
- Dashboard
- Quiz creation & editing
- Quiz attempt interface
- Leaderboard
- Analytics
- Attempt result breakdown

---

# 🧠 Frontend Architecture

The frontend follows:

- App Router structure (Next.js 16)
- Client-side authentication using JWT
- Protected route redirection
- Component-based modular UI
- API communication via `fetch()`

Authentication token is stored in:

```
localStorage
```

And sent via header:

```
Authorization: Bearer
```

---

# 📂 Page Structure

```
app/
│
├── page.tsx → Dashboard
├── login/
├── register/
├── create-quiz/
├── quiz/
│   ├── [id]/page.tsx
│   └── [id]/edit/page.tsx
│
├── attempts/
│   ├── page.tsx
│   └── [id]/page.tsx
│
└── stats/
    └── page.tsx
```

---

# 🏠 Dashboard (`/`)

### Displays:

- My Quizzes
- My Attempts
- Average Percentage
- Recent Attempts
- Quick Access Controls

### Features:

- Public/Private toggle
- Share link
- Edit button
- Delete button
- Real-time stats fetch

---

# 🔐 Authentication Pages

---

## `/login`

- Email + password login
- JWT stored in localStorage
- Redirect to dashboard after login

---

## `/register`

- Name
- Email
- Password
- Password hashing handled backend-side

---

# ➕ Create Quiz Page (`/create-quiz`)

Users can:

- Add quiz title
- Add multiple questions
- Add multiple options
- Select correct answer
- Submit quiz

Validation ensures:

- Minimum two options per question
- Exactly one correct option

---

# 📘 Quiz Attempt Page (`/quiz/[id]`)

Displays:

- Quiz title
- List of questions
- Multiple-choice selection
- Answer progress indicator
- Submit button
- Leaderboard section

### After Submission:

- Score percentage
- Pass/Fail badge
- Link to detailed attempt view

---

# ✏ Edit Quiz Page (`/quiz/[id]/edit`)

Available only to quiz owner.

### Features:

- Edit title
- Edit question text
- Edit options
- Set correct answer
- Add question
- Remove question
- Add option
- Remove option
- Drag reorder (if enabled)
- Smooth animations (Framer Motion)

---

# 📄 Attempt History Page (`/attempts`)

Displays:

- List of past attempts
- Score percentage
- Quiz title
- Timestamp

Sorted by latest first.

---

# 📄 Attempt Detail Page (`/attempts/[id]`)

Displays:

- Animated score circle
- Correct / Incorrect indicator
- Question-by-question breakdown
- Quiz-specific statistics
- Performance insights

Includes:

- Platform comparison
- Performance level tag (Excellent / Good / Needs Improvement)

---

# 📊 Stats Page (`/stats`)

Displays:

### Personal Stats:

- Total quizzes created
- Total attempts
- Highest score
- Average score
- Average percentage

Data fetched from:

```
/api/stats
```

---

# 🎨 UI Design System

### Theme:

- Dark theme
- Soft borders
- Rounded cards
- Subtle hover animations
- Gradient buttons

### Layout Principles:

- Clean spacing
- Responsive grid
- Mobile-friendly design
- Minimal clutter

---

# 🔄 State Management

Uses:

- React `useState`
- React `useEffect`
- Controlled form inputs
- Conditional rendering

No external state libraries required.

---

# 📡 API Integration

All API calls use:

```js
fetch("/api/endpoint", {
  method: "GET" | "POST" | "PATCH" | "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
})
```

Protected routes redirect to `/login` if token missing.

---

# 🔒 Frontend Security Considerations

* No sensitive logic on frontend
* No score calculation on frontend
* JWT required for protected pages
* Redirect if unauthorized
* Correct answers never exposed before submission

---

# ⚡ Performance Considerations

* Lazy loading via App Router
* Minimal re-renders
* Efficient API calls
* Limited leaderboard fetch (Top 10)
* Lightweight animations

---

# 🧩 Future Improvements

* Skeleton loaders
* Toast notifications
* Theme toggle (Light/Dark)
* Admin dashboard
* Pagination
* Search & filter quizzes
* Global state management (if scaling)

---

# 📌 Frontend Version

**v2.0 — Production Ready SaaS UI**