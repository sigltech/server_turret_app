const User = require('../models/User')
const mongoose = require('mongoose');
module.exports = {
    get: (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(users)
            }
        })
    },
    get_id: (req, res) => {
        const USER_ID = mongoose.Types.ObjectId(req.params.id)
        console.log(`Searching for ${USER_ID}...`)
        // User.findOne({ "_id": ObjectId( USER_ID) } , (err, user) => {
        // User.findById(USER_ID, { lean: true }, (err, user) => {
        // User.findOne({ "_id": USER_ID }, (err, user) => {
        User.findById(USER_ID, (err, user) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else if (user === null) {
                console.log("Result: ", user)
                res.status(200).send(`No Data: User ${USER_ID} not found`)
            } else {
                console.log("Result: ", user)
                res.status(200).send(user)
            }
        })
    },
    post: (req, res) => {
        const newUser = new User(req.body);
        newUser.save();
        res.send(newUser);
    }
};

