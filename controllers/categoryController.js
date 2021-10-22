const { allCategories,createCategory,updateCategory, deleteCategory, oneCategory }  = require('../services/categoryServices')
const { isEmpty, isString } = require('lodash')

module.exports = {
    getCategories : async() => {
        return await allCategories()
        .then(categories => categories)
    },
    getCategory : async(id) => {
        console.log(id)
        return await oneCategory(id)
        .then(category => category)
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