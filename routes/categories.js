const express = require('express');
const router = express.Router();

const { getAllCategories,newCategory } = require('../controllers/categoryController')

router.get('/', (req, res, next) => {
    getAllCategories()
    .then(categories => res.status(201).json(categories))
    .catch(err => res.status(401).send(err.message))
});

router.post('/', (req, res, next) => {
    const {name,description} = req.body

    if(name && typeof(name) === 'string'){
        newCategory(name,description)
        .then(category => res.status(201).json(category))
        .catch(err => res.status(401).send(err.message))  
    }else{
        res.status(401).send('name should be existing and string')
    }
});

module.exports = router;