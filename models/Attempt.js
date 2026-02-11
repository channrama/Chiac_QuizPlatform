const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  attemptedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Attempt || mongoose.model('Attempt', AttemptSchema);
