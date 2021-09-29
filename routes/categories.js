const express = require('express');
const router = express.Router();

const { getAllCategories,newCategory, updateOne } = require('../controllers/categoryController')

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