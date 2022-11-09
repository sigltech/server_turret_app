const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    index: Number,
    language: String,
    difficulty: String,
    description: String,
    code_question: String,
    code_answer: String,
    failed_message: String,
    success_message: String
});

const model = mongoose.model('Question', schema);

module.exports = model;
