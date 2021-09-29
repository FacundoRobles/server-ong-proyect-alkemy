const express = require('express');
const router = express.Router();

const { getCategories } = require('../controllers/categoryController')

router.get('/', (req, res, next) => {
    getCategories()
    .then(categories => res.status(201).json(categories))
    .catch(err => res.status(401).send(err.message))
});

module.exports = router;