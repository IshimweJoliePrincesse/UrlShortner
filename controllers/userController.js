// controllers/userController.js

// Placeholder array of users (replace with database queries)
let users = [
  { id: 1, username: "john_doe", email: "john@example.com" },
  { id: 2, username: "jane_smith", email: "jane@example.com" },
];

// Get user by ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

// Update user profile
exports.updateUserProfile = (req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  let userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update user data
  users[userIndex] = { ...users[userIndex], ...userData };

  res.json({
    message: "User profile updated successfully",
    user: users[userIndex],
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter((user) => user.id !== userId);

  res.json({ message: "User deleted successfully" });
};
