# Online Quiz & Assessment Platform

## 📌 Project Overview

This project is a backend implementation of an Online Quiz & Assessment Platform built as part of the internship program.

The platform supports:

- Quiz creation with multiple questions
- Multiple-choice questions (MCQs)
- Quiz attempt submission
- Automatic score calculation
- Percentage scoring
- Attempt history tracking
- Basic platform statistics

---

## 🛠 Tech Stack

- Next.js (App Router API Routes)
- MongoDB Atlas
- Mongoose
- Node.js

---

## 📂 Project Structure

```
quiz-platform/
│
├── app/
│   └── api/
│       ├── quiz/
│       ├── attempts/
│       └── stats/
│
├── models/
│   ├── Quiz.js
│   └── Attempt.js
│
├── lib/
│   └── mongodb.js
│
├── BACKEND_DOCUMENTATION.md
└── README.md
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

Create a file named:

```
.env.local
```

Add your MongoDB connection string:

```
MONGODB_URI=your_mongodb_connection_string
```

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 🚀 API Endpoints

### 🔹 POST `/api/quiz/create`
Creates a new quiz.

---

### 🔹 GET `/api/quiz`
Returns list of quizzes (ID and title).

---

### 🔹 GET `/api/quiz/[id]`
Returns quiz details (correct answers hidden).

---

### 🔹 POST `/api/quiz/[id]/attempt`
Submits quiz attempt and returns:

- score
- totalQuestions
- percentage
- attemptId

---

### 🔹 GET `/api/attempts`
Returns attempt history (latest first).

---

### 🔹 GET `/api/stats`
Returns:

- totalQuizzes
- totalAttempts

---

## 🔒 Validation & Security

- Each question must have at least two options.
- Each question must have exactly one correct option.
- Attempt inputs are validated.
- Correct answers are never exposed in quiz detail API.

---

## 🧪 Sample Test Flow

1. Create a quiz using POST `/api/quiz/create`
2. Fetch quizzes using GET `/api/quiz`
3. Fetch quiz details using GET `/api/quiz/[id]`
4. Submit attempt using POST `/api/quiz/[id]/attempt`
5. View attempt history using GET `/api/attempts`

---

## ✅ Features Completed

- Quiz management
- Automatic scoring
- Attempt storage
- Percentage calculation
- Attempt history
- Statistics endpoint
- Input validation
- Secure API responses

---

## 📎 Notes

This backend is designed to integrate with a frontend built using Next.js.

For detailed backend explanation, refer to:

```
BACKEND_DOCUMENTATION.md
```
