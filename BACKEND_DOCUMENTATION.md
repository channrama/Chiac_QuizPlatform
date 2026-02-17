# Online Quiz & Assessment Platform — Backend Documentation

## 📌 Overview

This backend supports:

- Quiz creation
- Quiz listing and viewing
- Quiz attempt submission
- Automatic score calculation
- Attempt history tracking
- Basic statistics endpoint

The backend is built using:

- Next.js (App Router API routes)
- MongoDB Atlas
- Mongoose ODM

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
└── BACKEND_DOCUMENTATION.md
```

---

## 🗄 Data Models

### 1️⃣ Quiz Model

Each quiz contains:

- `title` (String)
- `questions` (Array)

Each question contains:

- `questionText`
- `options`

Each option contains:

- `text`
- `isCorrect` (stored internally only)

---

### 2️⃣ Attempt Model

Each attempt contains:

- `quizId` (Reference to Quiz)
- `score`
- `totalQuestions`
- `createdAt`
- `updatedAt`

---

## 🚀 API Endpoints

---

### 🔹 POST `/api/quiz/create`

Creates a new quiz.

#### Request Body:
```json
{
  "title": "Sample Quiz",
  "questions": [
    {
      "questionText": "2 + 2 = ?",
      "options": [
        { "text": "3", "isCorrect": false },
        { "text": "4", "isCorrect": true }
      ]
    }
  ]
}
```

#### Response:
```json
{
  "message": "Quiz created successfully",
  "quizId": "..."
}
```

---

### 🔹 GET `/api/quiz`

Returns list of quizzes (ID and title only).

---

### 🔹 GET `/api/quiz/[id]`

Returns quiz details.

⚠️ Correct answers (`isCorrect`) are removed from response for security.

---

### 🔹 POST `/api/quiz/[id]/attempt`

Submits quiz attempt.

#### Request Body:
```json
{
  "answers": [
    { "questionIndex": 0, "selectedOptionIndex": 1 }
  ]
}
```

#### Response:
```json
{
  "message": "Attempt recorded successfully",
  "score": 1,
  "totalQuestions": 1,
  "percentage": 100,
  "attemptId": "..."
}
```

---

### 🔹 GET `/api/attempts`

Returns list of past attempts.

- Sorted by latest first
- Includes quiz title via population

---

### 🔹 GET `/api/stats`

Returns basic platform statistics.

#### Response:
```json
{
  "totalQuizzes": 3,
  "totalAttempts": 10
}
```

---

## ✅ Backend Features Implemented

- Input validation for quiz creation
- Validation for attempt submission
- Automatic score calculation
- Percentage calculation
- Attempt storage in database
- Secure API (correct answers hidden)
- Sorted attempt history
- Statistics endpoint

---

## 🔒 Security & Validation

- Each question must have exactly one correct option.
- Each question must have at least two options.
- Attempt input is validated.
- Extra answers are rejected.
- Correct answers are never exposed in quiz detail API.

---

## 📎 Notes for Frontend Team

- Use `/api/quiz` to list quizzes.
- Use `/api/quiz/[id]` to fetch quiz questions.
- Use `/api/quiz/[id]/attempt` to submit answers.
- Use `/api/attempts` for attempt history.
- Use `/api/stats` for dashboard metrics.
