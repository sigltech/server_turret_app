const express = require('express');
const router = express.Router();
const controller = require('../controllers/questionsController.js')

// routes
router.get('/',controller.get)

module.exports = router
