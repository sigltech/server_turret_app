const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    index: {
        type: Number,
        min: 0,
        require: true
    },
    language: {
        type: String,
        enum: ['javascript', 'python'],
        require: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium','hard'],
        require: true
    },
    description: {
        type: String,
        require: true
    },
    code_question: {
        type: String,
        require: true
    },
    code_answer: {
        type: String,
        require: true
    },
    failed_message: {
        type: String,
        require: true
    },
    success_message: {
        type: String,
        require: true
    },
});

const model = mongoose.model('Question', schema);

module.exports = model;
