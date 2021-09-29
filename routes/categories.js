const express = require('express');
const router = express.Router();

const { getCategories,newCategory } = require('../controllers/categoryController')

router.get('/', (req, res, next) => {
    getCategories()
    .then(categories => res.status(201).json(categories))
    .catch(err => res.status(401).send(err.message))
});

router.post('/', (req, res, next) => {
    const {name,description} = req.body

    newCategory(name,description)
    .then(category => {
        if(typeof(category) !== 'string'){
            return res.status(201).json(category)
        }
        
        res.status(401).send(category)
    })
});

module.exports = router;