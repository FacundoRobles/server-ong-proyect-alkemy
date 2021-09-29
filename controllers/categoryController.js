const { allCategories }  = require('../services/categoryServices')

module.exports = {
    getCategories : async() => {
        return await allCategories()
        .then(categories => categories)
    }
}