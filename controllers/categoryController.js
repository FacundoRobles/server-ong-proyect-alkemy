const { allCategories,createCategory,updateCategory, deleteCategory }  = require('../services/categoryServices')
const { isEmpty, isString } = require('lodash')

module.exports = {
    getCategories : async() => {
        return await allCategories()
        .then(categories => categories)
    },
    newCategory : async(name,description) => {
        if(!isEmpty(name) && isString(name)){
            return await createCategory(name,description)
            .then(created => created)
        }
    },
    updateOne : async(idCategory,name,description) => {
        if(!isEmpty(name) && isString(name)){ 
            return await updateCategory(idCategory,name,description)
        }
    },
    deleteOne : async(idCategory) => {
        return await deleteCategory(idCategory);
    }
}