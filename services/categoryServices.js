const { Category }  = require('../models/index')

const getAll = async () => {
    return await Category.findAll()
    .then(categories => categories)
    .catch(err => err)
}

const createCategory = async (name,description) => {
    return await Category.create({
        name,
        description
    })
    .then(category => category)
    .catch(err => err)
}

const updateCategory = async (idCategory,name,description) => {
    return await Category.findByPk(idCategory)
    .then(async(category) => {
        if(category){
            if(name){
                category.name = name
            }
            if(description){
                category.description = description
            }
            await category.save()
            return category
        }else{
            return 'this category dont exists'
        }
    })
    .catch(err => err)
}

module.exports = {
    getAll,
    createCategory,
    updateCategory
}