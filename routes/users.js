// Routes for URL/users

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController.js')

// routes
router.get('/', controller.get) // Get All
router.get('/:id', controller.get_id) // Get by id
router.post('/', controller.post) // Create New User

module.exports = router
