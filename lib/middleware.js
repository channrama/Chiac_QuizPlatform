const { verifyToken } = require('./auth');
const connectDB = require('./db');
const User = require('../models/User');

async function getUserFromRequest(req) {
  let token = null;

  // 1. Try Authorization header
  const auth = req.headers.get ? req.headers.get('authorization') : req.headers.authorization;
  if (auth && auth.startsWith('Bearer ')) {
    token = auth.split(' ')[1];
  }

  // 2. Try Cookies (if no header token found)
  if (!token) {
    const { cookies } = require('next/headers');
    token = cookies().get('token')?.value;
  }

  if (!token) return null;
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
