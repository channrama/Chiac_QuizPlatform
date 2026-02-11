const { verifyToken } = require('./auth');
const connectDB = require('./db');
const User = require('../models/User');

async function getUserFromRequest(req) {
  const auth = req.headers.get ? req.headers.get('authorization') : req.headers.authorization;
  if (!auth) return null;
  const parts = auth.split(' ');
  if (parts.length !== 2) return null;
  const token = parts[1];
  try {
    const payload = verifyToken(token);
    await connectDB();
    const user = await User.findById(payload.id).select('-password');
    return user;
  } catch (err) {
    return null;
  }
}

function requireRole(user, role) {
  return user && user.role === role;
}

module.exports = { getUserFromRequest, requireRole };
