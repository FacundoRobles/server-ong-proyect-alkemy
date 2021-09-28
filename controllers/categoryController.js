const { getAll }  = require('../services/categoryServices')

module.exports = {
    getAllCategories : async() => {
        let names = []
        await getAll()
        .then(categories => {
            categories.forEach(element => names.push(element.name))
        })

        return names
    }
}