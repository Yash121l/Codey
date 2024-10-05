const express = require('express');
const { createPen, getPens } = require('../controllers/penController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/pens
// @desc    Get all pens
// @access  Public
router.get('/', getPens);

// @route   POST /api/pens
// @desc    Create a new pen
// @access  Private
router.post('/', auth, createPen);

module.exports = router;
