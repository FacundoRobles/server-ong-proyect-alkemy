const { getAll,createCategory }  = require('../services/categoryServices')

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
    }
}