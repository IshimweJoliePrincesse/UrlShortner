const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Placeholder route for fetching user data
router.get("/:id", userController.getUserById);

module.exports = router;
