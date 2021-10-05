const { Category }  = require('../models/index')
const { isEmpty, isString, isBoolean } = require('lodash')

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

const updateCategory = async (idCategory, fields) => {

    return await Category.findByPk(idCategory)
    .then(async(category) => {

        if(!isEmpty(category)){
            if(isString(fields.first)){
                await Category.update({
                    name: fields.first,
                    description: fields.second
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
    return await Category.destroy(idCategory);
}

module.exports = {
    allCategories,
    createCategory,
    updateCategory,
    deleteCategory
}