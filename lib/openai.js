import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateQuizQuestions(extractedText, numberOfQuestions, difficulty) {
  const prompt = `You are an expert educational assessment generator.

Generate exactly ${numberOfQuestions} multiple-choice questions from the study material below.
Difficulty Level: ${difficulty}

IMPORTANT RULES:
- Each question must have exactly 4 options
- Only one correct answer per question
- Return ONLY a valid JSON array, no other text
- Do NOT include markdown code blocks, explanations, or any extra text
- Questions must test comprehension and logical understanding of the content
- For HARD difficulty: use confusing distractors that are similar to the answer
- For EASY difficulty: use clearly different distractors
- For MEDIUM difficulty: use balanced distractors

Return ONLY this JSON format with no additional text:
[
{"question":"What is...?","options":["Option A","Option B","Option C","Option D"],"correctAnswer":0},
{"question":"How does...?","options":["Option A","Option B","Option C","Option D"],"correctAnswer":1}
]

Study Material:
${extractedText}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    const content = response.text;
    
    // Parse JSON from response
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in response');
    }
    
    const questions = JSON.parse(jsonMatch[0]);
    
    // Validate
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Invalid response format');
    }
    
    return questions.slice(0, numberOfQuestions);
  } catch (err) {
    console.error('Gemini AI error:', err.message);
    throw new Error(`AI generation failed: ${err.message}`);
  }
}
