require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const mongoose = require('mongoose')

const username = process.env.MONGO_USER
const password = encodeURIComponent(process.env.MONGO_PASS)
// middleware

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// connect to mongoose 

switch (process.env.ENVIRONMENT) {
    case "production":
        mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.iepp8yq.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.log(err);
            } else {
                return console.log('Connected to MongoDB Production Server');
            }
        });
        break;
    case "development":
        mongoose.connect(`mongodb://127.0.0.1:27017`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.log(err);
            } else {
                return console.log('Connected to MongoDB Local Development Server');
            }
        });
        break;
}

// initial route

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Questions Routes
const questionsRoutes = require('./routes/questions')
app.use('/questions',questionsRoutes)
// Users Routes
const usersRoutes = require('./routes/users')
app.use('/users',usersRoutes)

// start server

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

