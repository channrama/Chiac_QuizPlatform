```markdown
# 🧠 Quiz Platform — Full Stack SaaS Application (v2.0)

## 📌 Overview

Quiz Platform is a full-stack Online Quiz & Assessment System built using **Next.js (App Router)** and **MongoDB**.

It allows users to:

- ✅ Register & Login
- ✅ Create quizzes
- ✅ Edit & delete quizzes (owner only)
- ✅ Toggle public/private visibility
- ✅ Attempt quizzes
- ✅ View leaderboard per quiz
- ✅ Track personal analytics
- ✅ View platform-level statistics

This project evolved from a backend-only system into a complete SaaS-style quiz platform.

---

## 🛠 Tech Stack

### 🎨 Frontend
- **Next.js 15+** (App Router)
- **React**
- **Tailwind CSS**
- **Framer Motion**

### 🔧 Backend
- **Next.js API Routes**
- **MongoDB Atlas**
- **Mongoose ODM**
- **JWT Authentication**
- **bcryptjs**

---

## 🔐 Authentication

- User Registration
- User Login
- JWT-based authentication
- Protected routes
- Owner-based quiz authorization

> **Note:** All protected endpoints require an `Authorization: Bearer <token>` header.

---

## 🚀 Features

### 👤 User Features
- Register / Login
- Create quizzes
- Attempt public quizzes
- View attempt history
- View personal analytics

### 🧑‍💻 Creator Features
- Edit quiz
- Delete quiz
- Toggle public/private
- Share quiz link
- View quiz leaderboard

### 📊 Analytics
- My quizzes
- My attempts
- Average percentage
- Highest score
- Per-quiz statistics
- Platform-wide statistics

---

## 📂 Project Structure

```text
quiz-platform/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── quiz/
│   │   ├── attempts/
│   │   └── stats/
│   │
│   ├── quiz/
│   ├── attempts/
│   ├── login/
│   ├── register/
│   └── page.tsx (Dashboard)
│
├── models/
│   ├── User.js
│   ├── Quiz.js
│   └── Attempt.js
│
├── lib/
│   ├── mongodb.js
│   └── auth.js
│
├── README.md
├── BACKEND_DOCUMENTATION.md
└── FRONTEND_DOCUMENTATION.md

```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <repository_url>
cd quiz-platform

```

### 2️⃣ Install Dependencies

```bash
npm install

```

### 3️⃣ Configure Environment Variables

Create a file named `.env.local` and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

### 4️⃣ Run Development Server

```bash
npm run dev

```

Application runs at: `http://localhost:3000`

---

## 🌍 Deployment

**Recommended platform:** [Vercel](https://vercel.com)

1. Push project to GitHub.
2. Import project into Vercel.
3. Set environment variables (`MONGODB_URI`, `JWT_SECRET`).
4. Deploy.

*Use separate branches for preview deployments before moving to production.*

---

## 🧪 Sample Flow

1. **Register** a new user.
2. **Login** and receive JWT token.
3. **Create** a quiz.
4. **Attempt** the quiz.
5. **View leaderboard** for that quiz.
6. **Check analytics** in the dashboard to review the attempt breakdown.

---

## 🏗 Architecture Highlights

* Hybrid SaaS quiz platform.
* Owner-based access control.
* Private quiz protection.
* Separate stats endpoints.
* Per-quiz leaderboard.
* Platform-wide analytics.
* Clean API separation (Attempt API ≠ Stats API).

---

## 🔒 Security & Validation

* Password hashing using **bcrypt**.
* **JWT** authentication for session management.
* Private quiz protection via middleware/API checks.
* Owner-only edit/delete permissions.
* Attempt input validation.
* **Security:** Correct answers are never exposed in the quiz detail API.

---

## 📌 Version

**v2.0** — Full Stack SaaS Edition

## 👨‍💻 Author

Developed as part of internship full-stack project implementation.
