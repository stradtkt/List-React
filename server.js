const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./config/keys').mongoURI;

app.use(express.json());
app.use('./api/items', require('./routes/api/items'));

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('There was an error', err));

app.get('/', (req, res) => {
    res.send('App HERE');
});

app.listen(port, () => console.log(`App is running on port ${port}`));

