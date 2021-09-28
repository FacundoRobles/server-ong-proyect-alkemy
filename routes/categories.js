const express = require('express');
const router = express.Router();

const { getAllCategories } = require('../controllers/categoryController')

router.get('/', (req, res, next) => {
    getAllCategories()
    .then(test => res.status(201).json(test))
    .catch(err => res.status(401).send(err.message))
});

module.exports = router;