const Question = require('../models/Question')

module.exports = {
    get: (req, res) => {
        Question.find({}, (err, questions) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(questions)
            }
        })
        // res.send("Hello from the questionsController!");
    },
    post: (req, res) => {
        const newQuestion = new Question(req.body);
        newQuestion.save();
        res.send(newQuestion);
    }
};
