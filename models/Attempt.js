const mongoose = require('mongoose');

const AttemptSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  answers: { type: Array, default: [] }, // Use Array to be more flexible
  attemptedAt: { type: Date, default: Date.now }
});

// Force deletion of model in development to ensure schema changes are picked up
if (process.env.NODE_ENV === 'development') {
  delete mongoose.models.Attempt;
}

module.exports = mongoose.models.Attempt || mongoose.model('Attempt', AttemptSchema);
