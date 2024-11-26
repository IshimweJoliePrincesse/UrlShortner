// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

// Authentication middleware to verify JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token not provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid access token' });
        }
        req.user = user;
        next();
    });
}

module.exports = { authenticateToken };