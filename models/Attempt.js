import mongoose from "mongoose";

const AttemptSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    answers: [
      {
        questionIndex: Number,
        selectedOptionIndex: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Attempt ||
  mongoose.model("Attempt", AttemptSchema);
