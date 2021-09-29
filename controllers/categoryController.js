const { getAll,createCategory,updateCategory }  = require('../services/categoryServices')

module.exports = {
    getAllCategories : async() => {
        let names = []
        await getAll()
        .then(categories => {
            categories.forEach(element => names.push(element.name))
        })

        return names
    },
    newCategory : async(name,description) => {
        return await createCategory(name,description)
        .then(created => created)
    },
    updateOne: async(idCategory,name,description) => {
       return await updateCategory(idCategory,name,description)
       .then(category => {
           if(category){
               return category
           }
       })
    }
}