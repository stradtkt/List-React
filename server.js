const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./config/keys').mongoURI;
app.use(express.json());
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('There was an error', err));


app.listen(port, () => console.log(`App is running on port ${port}`));

