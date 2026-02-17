const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true }
});

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number, default: 0 },
  accessPassword: { type: String }, // Optional hashed password
  quizId: { type: String, unique: true, sparse: true }, // Formal Unique ID (e.g. QZ-ABCD12)
  joinCode: { type: String, unique: true, sparse: true }, // Alphanumeric Join Code
  publicUrl: { type: String, unique: true, sparse: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questions: [QuestionSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
