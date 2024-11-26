const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config(); // Load environment variables

// Dummy user data for demonstration (replace with database queries)
const users = [{ id: 1, username: "admin", password: "adminpassword" }];

// Authenticate user and generate JWT token
exports.login = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  // Find user by username (replace with database query)
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};
