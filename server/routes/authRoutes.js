const express = require('express');
const { check, validationResult } = require('express-validator');
const { signIn, signUp } = require('../controllers/authController');

const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post(
    '/signup',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required with minimum 6 characters').isLength({ min: 6 }),
    ],
    signUp
);

// @route   POST /api/auth/signin
// @desc    Sign in an existing user
// @access  Public
router.post(
    '/signin',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    signIn
);

module.exports = router;
