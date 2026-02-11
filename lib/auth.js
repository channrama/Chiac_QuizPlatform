const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret';

function signToken(payload, opts = { expiresIn: '7d' }) {
  return jwt.sign(payload, JWT_SECRET, opts);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { signToken, verifyToken };
