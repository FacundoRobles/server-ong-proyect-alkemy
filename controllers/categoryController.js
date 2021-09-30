const { allCategories,createCategory,updateCategory }  = require('../services/categoryServices')

module.exports = {
    getCategories : async() => {
        return await allCategories()
        .then(categories => categories)
    },
    newCategory : async(name,description) => {
        if(name && typeof(name) === 'string'){
            return await createCategory(name,description)
            .then(created => created)
        }

        return 'camp name should type string'
    },
    updateOne : async(idCategory,name,description) => {
       return await updateCategory(idCategory,name,description)
       .then(category => {
           if(category){
               return category
           }
       })
    }
}