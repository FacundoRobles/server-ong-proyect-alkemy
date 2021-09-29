const { Category }  = require('../models/index')

const getAll = async () => {
    return await Category.findAll()
    .then(categories => categories)
    .catch(err => err)
}

const createCategory = async (name,description) => {
    return await Category.create({
        name,
        description
    })
    .then(category => category)
    .catch(err => err)
}

module.exports = {
    getAll,
    createCategory
}