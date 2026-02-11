export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

export function validateRegisterPayload(payload) {
  const errors = [];
  const { name, email, password, role } = payload || {};
  if (!name || typeof name !== 'string' || name.trim().length < 2) errors.push('Name is required (min 2 chars)');
  if (!validateEmail(email)) errors.push('Valid email is required');
  if (!password || typeof password !== 'string' || password.length < 6) errors.push('Password must be at least 6 characters');
  if (!['teacher', 'student'].includes(role)) errors.push('Role must be teacher or student');
  return { valid: errors.length === 0, errors };
}

export function validateQuizPayload(payload) {
  const errors = [];
  const { title, questions, duration } = payload || {};
  if (!title || typeof title !== 'string' || title.trim().length < 3) errors.push('Title is required (min 3 chars)');
  if (!Array.isArray(questions) || questions.length === 0) errors.push('At least one question is required');
  else {
    questions.forEach((q, idx) => {
      if (!q || typeof q.question !== 'string' || q.question.trim().length === 0) errors.push(`Question ${idx + 1}: text is required`);
      if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Question ${idx + 1}: must have 4 options`);
      else q.options.forEach((o, j) => { if (!o || typeof o !== 'string' || o.trim().length === 0) errors.push(`Question ${idx + 1}: option ${j + 1} is required`); });
      if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) errors.push(`Question ${idx + 1}: correctAnswer must be 0-3`);
    });
  }
  if (duration !== undefined && (typeof duration !== 'number' || duration < 0)) errors.push('Duration must be a positive number');
  return { valid: errors.length === 0, errors };
}
