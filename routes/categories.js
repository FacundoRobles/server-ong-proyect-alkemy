const express = require('express');
const router = express.Router();

const { getCategories,newCategory, updateOne } = require('../controllers/categoryController')

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

router.put('/:idCategory', (req, res, next) => {
    const { idCategory } = req.params
    const { name,description } = req.body

    updateOne(idCategory,name,description)
    .then(updated => {
        if(updated){
            return res.status(201).json(`category ${idCategory} modified`)
        }
        res.status(401).send(`sorry dont finded category ${idCategory}`)
    })
})

module.exports = router;