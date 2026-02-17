import { writeFile } from 'fs/promises';
import { join } from 'path';
import connectDB from '../../../../lib/db';
import Quiz from '../../../../models/Quiz';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';
import { extractTextFromPDF, validateQuizJSON } from '../../../../lib/aiQuiz';
import { generateQuizQuestions } from '../../../../lib/openai';
import crypto from 'crypto';

export async function POST(req) {
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

  try {
    const formData = await req.formData();
    const pdfFile = formData.get('pdf');
    const title = formData.get('title');
    const difficulty = formData.get('difficulty') || 'medium';
    const numberOfQuestions = parseInt(formData.get('numberOfQuestions')) || 5;
    const duration = parseInt(formData.get('duration')) || 10;
    const description = formData.get('description') || '';
    const accessPassword = formData.get('accessPassword') || '';

    if (!pdfFile) return new Response(JSON.stringify({ error: 'PDF file required' }), { status: 400 });
    if (!title || title.trim().length < 3) return new Response(JSON.stringify({ error: 'Quiz title required' }), { status: 400 });
    if (numberOfQuestions < 1 || numberOfQuestions > 50) return new Response(JSON.stringify({ error: 'Questions must be 1-50' }), { status: 400 });

    // convert file to buffer
    const buffer = Buffer.from(await pdfFile.arrayBuffer());

    // extract text
    const extractedText = await extractTextFromPDF(buffer);
    if (!extractedText || extractedText.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'No text extracted from PDF' }), { status: 400 });
    }

    // generate questions via AI
    const questions = await generateQuizQuestions(extractedText, numberOfQuestions, difficulty);

    // validate
    validateQuizJSON(questions);

    // save to db
    await connectDB();

    // Generate unique 6-digit numeric join code and formal Quiz ID
    let joinCode, quizId;
    let isUnique = false;
    while (!isUnique) {
      joinCode = Math.floor(100000 + Math.random() * 900000).toString();
      quizId = `QZ-${Math.floor(100000 + Math.random() * 900000)}`;
      const existing = await Quiz.findOne({ $or: [{ joinCode }, { quizId }] });
      if (!existing) isUnique = true;
    }

    const publicUrl = `quiz-${Math.floor(Math.random() * 10000000)}`;
    const quizData = { title, description, duration, questions, publicUrl, joinCode, quizId, createdBy: user._id };

    if (accessPassword) {
      const bcrypt = await import('bcryptjs');
      const hashed = await bcrypt.default.hash(String(accessPassword), 10);
      quizData.accessPassword = hashed;
    }

    const quiz = await Quiz.create(quizData);
    return new Response(JSON.stringify({ quiz, message: 'Quiz generated successfully' }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
