const express = require('express');
const router = express.Router();
const Item = require('./../../models/Item');

router.get('/', (req, res) => {
    Item.find({})
        .sort({date: -1})
        .then(items => res.json(items))
        .catch(err => console.log('There was an error', err));
});

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))
        .catch(err => console.log('There was an error', err));
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false, err}));
});


module.exports = router;
