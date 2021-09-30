const { Category }  = require('../models/index')

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

const updateCategory = async (idCategory,name,description) => {
    return await Category.findByPk(idCategory)
    .then(async(category) => {
        if(category !== null){
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
        return 
    })
}

module.exports = {
    allCategories,
    createCategory,
    updateCategory
}