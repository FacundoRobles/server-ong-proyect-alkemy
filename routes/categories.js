const express = require('express');
const router = express.Router();

const { getCategories,newCategory, updateOne,deleteOne } = require('../controllers/categoryController')

router.get('/', (req, res, next) => {
    getCategories()
    .then(categories => res.status(201).send({
        success: true,
        data: categories
    }))
    .catch(err => res.status(401).send({
        success: false,
        data: err.message
    }))
});

router.post('/', (req, res, next) => {
    const {name,description} = req.body

    newCategory(name,description)
    .then(category => {
        if(category){
            return res.status(201).send({
                success: true,
                data: category
            })
        }
        
        res.status(401).send({
            success: false,
            data: 'the name field should not be empty and be of type string'
        })
    })
});

router.put('/:idCategory', (req, res, next) => {
    const { idCategory } = req.params
    const { name,description } = req.body

    let request = {
        first: name,
        second: description
    }   

    deleteOne(idCategory,request)
    .then(updated => {
        if(updated){
            return res.status(201).send({
                success: true,
                data: `category ${idCategory} modified`
            })
        }
        res.status(401).send({
            success: false,
            data: `sorry dont finded category ${idCategory}`
        })
    })
})

router.delete('/:idCategory', (req, res, next) => {
    const { idCategory } = req.params

    deleteOne(idCategory)
    .then(updated => {
        if(updated){
            return res.status(201).send({
                success: true,
                data: `category ${idCategory} deleted`
            })
        }
        res.status(401).send({
            success: false,
            data: `sorry dont finded category ${idCategory}`
        })
    })
})

module.exports = router;