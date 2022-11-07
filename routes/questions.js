// Routes for URL/questions

const express = require('express');
const router = express.Router();
const controller = require('../controllers/questionsController.js')

// routes
router.get('/', controller.get)
router.post('/', controller.post)

module.exports = router
