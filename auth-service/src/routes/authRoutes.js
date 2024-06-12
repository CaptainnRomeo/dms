const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const auth = require('../middlewares/auth');
const router = express.Router();

// Register a user
router.post('/register', register);

// Authenticate user and get token
router.post('/login', login);

// Get logged-in user
router.get('/me', auth, getMe);

module.exports = router;

