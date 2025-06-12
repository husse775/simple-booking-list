const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  console.log("TOKEN:", token);  // <-- Lägg till denna rad

  if (!token) return res.status(401).json('Access denied');

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(400).json('Invalid token');
  }
};
