````md
# 🔧 Backend Documentation  
## Quiz Platform — v2.0 (Full Stack SaaS Backend)

---

## 📌 Overview

This backend powers a full-stack Online Quiz & Assessment Platform built using:

- **Next.js (App Router API Routes)**
- **MongoDB Atlas**
- **Mongoose ODM**
- **JWT Authentication**
- **bcryptjs**

The system supports authentication, quiz management, attempt evaluation, leaderboards, and analytics.

---

# 🧠 Architecture Design

The backend follows a modular REST-style architecture:

- Authentication APIs
- Quiz APIs
- Attempt APIs
- Leaderboard APIs
- Statistics APIs

Key Design Principle:

> Attempt API and Stats API are separated (Scalable Architecture)

---

# 🗄 Database Models

---

## 1️⃣ User Model

```js
{
  name: String,
  email: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
````

### Notes:

* Password is hashed using bcrypt
* Email must be unique

---

## 2️⃣ Quiz Model

```js
{
  title: String,
  questions: [
    {
      questionText: String,
      options: [
        {
          text: String,
          isCorrect: Boolean
        }
      ]
    }
  ],
  createdBy: ObjectId (ref: User),
  isPublic: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Features:

* Owner-based authorization
* Public / Private toggle
* Correct answers hidden from quiz fetch API

---

## 3️⃣ Attempt Model

```js
{
  quizId: ObjectId (ref: Quiz),
  userId: ObjectId (ref: User),
  score: Number,
  totalQuestions: Number,
  answers: [
    {
      questionIndex: Number,
      selectedOptionIndex: Number
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

### Notes:

* Score auto-calculated
* Percentage computed dynamically
* Used for leaderboard and stats

---

# 🔐 Authentication System

Authentication uses JWT tokens.

### Login Flow:

1. User submits email + password
2. Password validated via bcrypt
3. JWT token generated:

```json
{
  "id": "userId"
}
```

4. Token returned to frontend
5. Token required for protected endpoints

### Protected Header Format:

```
Authorization: Bearer <token>
```

---

# 🚀 API Endpoints

---

# 🔑 Authentication APIs

---

### POST `/api/auth/register`

Registers a new user.

#### Request Body:

```json
{
  "name": "John",
  "email": "john@test.com",
  "password": "password123"
}
```

---

### POST `/api/auth/login`

Returns:

```json
{
  "message": "Login successful",
  "token": "...",
  "user": {
    "name": "...",
    "email": "..."
  }
}
```

---

# 📘 Quiz APIs

---

### POST `/api/quiz/create`

Create quiz (Authenticated)

---

### GET `/api/quiz`

List public quizzes

---

### GET `/api/quiz/mine`

List quizzes created by logged-in user

---

### GET `/api/quiz/[id]`

Fetch quiz details

* Private quiz protection enforced
* Correct answers not exposed

---

### PATCH `/api/quiz/[id]`

Edit quiz (Owner only)

Allowed updates:

* title
* questions
* isPublic

---

### DELETE `/api/quiz/[id]`

Delete quiz (Owner only)

---

# 📝 Attempt APIs

---

### POST `/api/quiz/[id]/attempt`

Evaluates and stores attempt.

#### Request Body:

```json
{
  "answers": [
    { "questionIndex": 0, "selectedOptionIndex": 2 }
  ]
}
```

#### Response:

```json
{
  "message": "Attempt recorded successfully",
  "score": 3,
  "totalQuestions": 5,
  "percentage": 60,
  "attemptId": "..."
}
```

---

### GET `/api/attempts`

Returns logged-in user's attempts (latest first)

---

### GET `/api/attempts/[id]`

Returns full attempt details including quiz data

---

# 🏆 Leaderboard API

---

### GET `/api/quiz/[id]/leaderboard`

Returns top 10 attempts sorted by:

1. Score (Descending)
2. CreatedAt (Ascending)

Response includes populated user name.

---

# 📊 Statistics APIs

---

## Platform + Personal Stats

### GET `/api/stats`

Returns:

```json
{
  "myStats": {
    "totalQuizzes": 2,
    "totalAttempts": 5,
    "highestScore": 4,
    "averagePercentage": 72
  },
  "platformStats": {
    "totalQuizzes": 10,
    "totalAttempts": 120,
    "highestScore": 5,
    "averagePercentage": 68
  }
}
```

---

## Per-Quiz Stats

### GET `/api/quiz/[id]/stats`

Returns:

```json
{
  "averagePercentage": 75,
  "highestScore": 5
}
```

Used in attempt result page.

---

# 🔒 Security & Validation

* JWT validation for protected routes
* Owner-only edit/delete enforcement
* Private quiz protection
* Correct answers hidden in quiz fetch
* Attempt input validation
* Score computed server-side only
* No trust on frontend data

---

# 🏗 Scalability Considerations

* Separate stats endpoint
* Separate leaderboard endpoint
* Attempt evaluation independent of analytics
* Population only when required
* MongoDB indexing possible for scaling

---

# ⚡ Error Handling

Standard HTTP status codes:

* 200 → Success
* 201 → Created
* 400 → Bad Request
* 401 → Unauthorized
* 403 → Forbidden
* 404 → Not Found
* 500 → Internal Server Error

---

# 🧩 Future Improvements

* Rate limiting
* Admin dashboard
* Quiz categories
* Pagination
* Redis caching for leaderboard
* Analytics aggregation pipeline

---

# 📌 Backend Version

**v2.0 — Production Ready Full Stack Backend**