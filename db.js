// db.js

const mysql = require("mysql2/promise");

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",

  database: " url_shortener",
});

// Test the database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to MySQL database");
    connection.release();
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

testConnection();

module.exports = pool;
