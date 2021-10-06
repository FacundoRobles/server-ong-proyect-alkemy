const { Category }  = require('../models/index')
const { isEmpty, isString } = require('lodash')

const allCategories = async () => {
    return await Category.findAll({raw: true})
    .then(categories => categories)
}

const createCategory = async (name,description) => {
    return await Category.create({
        name,
        description
    })
    .then(category => category)
}

const updateCategory = async (idCategory, name, description) => {
    return await Category.findByPk(idCategory)
    .then(async(category) => {
        if(!isEmpty(category)){
            if(isString(name)){
                await Category.update({
                    name,
                    description
                },{
                    where:{
                        id: idCategory
                    }
                })
                return category 
            }
        }
        return 
    })
}
const deleteCategory = async (idCategory) => {
    return await Category.findByPk(idCategory)
    .then(category => {
        if(category){
            category.destroy()
            return category
        }
        return category
    })
}

module.exports = {
    allCategories,
    createCategory,
    updateCategory,
    deleteCategory
}