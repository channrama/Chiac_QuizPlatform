import pdfParse from 'pdf-parse';

export async function extractTextFromPDF(buffer) {
  try {
    const data = await pdfParse(buffer);
    const text = data.text || '';
    // limit to first 10000 chars to avoid token bloat
    return text.substring(0, 10000);
  } catch (err) {
    throw new Error(`PDF extraction failed: ${err.message}`);
  }
}

export function validateQuizJSON(data) {
  if (!Array.isArray(data)) throw new Error('Response must be an array');
  if (data.length === 0) throw new Error('No questions generated');
  
  const errors = [];
  data.forEach((q, idx) => {
    if (!q.question || typeof q.question !== 'string') errors.push(`Q${idx + 1}: missing question text`);
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Q${idx + 1}: must have 4 options`);
    else q.options.forEach((o, j) => { if (!o || typeof o !== 'string') errors.push(`Q${idx + 1} opt${j + 1}: invalid`); });
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) errors.push(`Q${idx + 1}: correctAnswer must be 0-3`);
  });
  
  if (errors.length) throw new Error(errors.join('; '));
  return data;
}
