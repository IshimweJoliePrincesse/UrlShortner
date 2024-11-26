const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// Start server
const PORT = process.env.PORT || 4667;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
