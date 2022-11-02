const express = require('express');
const router = express.Router();
const controller = require('../controllers/questionsController.js')

// routes
router.get('questions/',controller.get)

module.exports = router
