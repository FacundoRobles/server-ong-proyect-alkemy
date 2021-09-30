const { allCategories,createCategory,updateCategory }  = require('../services/categoryServices')
const { isEmpty, isString } = require('lodash')

module.exports = {
    getCategories : async() => {
        return await allCategories()
        .then(categories => categories)
    },
    newCategory : async(name,description) => {
        let empty = isEmpty(name)
        let string = isString(name)

        if(!empty && string){
            return await createCategory(name,description)
            .then(created => created)
        }
    },
    updateOne : async(idCategory,fields) => {
       return await updateCategory(idCategory,fields)
       .then(category => {
           if(category){
               return category
           }
       })
    }
}