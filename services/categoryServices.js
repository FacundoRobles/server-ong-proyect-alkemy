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

const updateCategory = async (idCategory,fields) => {
    let string = isString(fields.first)
    let boolean = isBoolean(fields.first)

    return await Category.findByPk(idCategory)
    .then(async(category) => {
        let empty = isEmpty(category)

        if(!empty){
            if(string){
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
            
            if(boolean){
                await Category.update({
                    deleted: fields.first,
                    deletedAt: new Date()
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

module.exports = {
    allCategories,
    createCategory,
    updateCategory
}