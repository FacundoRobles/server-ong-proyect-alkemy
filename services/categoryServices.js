const { Category }  = require('../models/index')

const allCategories = async () => {
    return await Category.findAll({raw: true})
    .then(categories => categories)
}

module.exports = {
    allCategories
}