import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean,
});

const QuestionSchema = new mongoose.Schema({
  questionText: String,
  options: [OptionSchema],
});

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    questions: [QuestionSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Quiz ||
  mongoose.model("Quiz", QuizSchema);
