//The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name i.e. the model Tank is for the tanks collection in the database.

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String
});

const model = mongoose.model('User', schema);

module.exports = model;
