const { Category }  = require('../models/index')

const getAll = async () => {
    return await Category.findAll()
    .then(categories => categories)
    .catch(err => err)
}

module.exports = {
    getAll
}