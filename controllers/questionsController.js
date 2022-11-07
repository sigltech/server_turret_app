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
    },
    get_id: (req, res) => {
        const QUESTION_ID = req.params.id
        Question.findById(QUESTION_ID, (err, question) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else if (question === null) {
                console.log("Result: ", question)
                res.status(200).send(`No Data: question ${QUESTION_ID} not found`)
            } else {
                console.log("Result: ", question)
                res.status(200).send(question)
            }
        })
    },
    post: (req, res) => {
        const newQuestion = new Question(req.body);
        newQuestion.save();
        res.send(newQuestion);
    }
};
