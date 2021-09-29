const { allCategories,createCategory }  = require('../services/categoryServices')

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
    }
}