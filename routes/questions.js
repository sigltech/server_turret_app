// Routes for URL/questions

const express = require('express');
const router = express.Router();
const controller = require('../controllers/questionsController.js')

// routes
router.get('/', controller.get) // Get All
router.get('/:id', controller.get_id) // Get by id
router.post('/', controller.post) // Create New Question

module.exports = router
