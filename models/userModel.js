// models/userModel.js

const mysql = require("mysql2/promise");
require("dotenv").config(); // Load environment variables

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.localhost,
  user: process.env.DB_USER || "root", // Default to 'root' if DB_USER is not provided
  password: process.env.null | null, // Pass null if no password is set
  database: process.env.url_shortener,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to fetch user by ID
exports.getUserById = async (userId) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);
    connection.release();
    return rows[0]; // Assuming only one user is returned
  } catch (error) {
    throw error;
  }
};

// Function to update user profile
exports.updateUserProfile = async (userId, userData) => {
  try {
    const { username, email } = userData;
    const connection = await pool.getConnection();
    await connection.query(
      "UPDATE users SET username = ?, email = ? WHERE id = ?",
      [username, email, userId]
    );
    connection.release();
  } catch (error) {
    throw error;
  }
};

// Function to delete user
exports.deleteUser = async (userId) => {
  try {
    const connection = await pool.getConnection();
    await connection.query("DELETE FROM users WHERE id = ?", [userId]);
    connection.release();
  } catch (error) {
    throw error;
  }
};
