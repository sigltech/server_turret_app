const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: String,
    title: String,
    function: String,
    jest_function_incomplete: String,
    jest_function_complete: String,
    description: String,
    difficulty: String,
    language: String
});

const model = mongoose.model('Question', schema);

module.exports = model;
