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

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.iepp8yq.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        return console.log('Connected to MongoDB');
    }
});

// initial route

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// start server

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

