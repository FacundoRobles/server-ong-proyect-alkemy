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
    }
}

module.exports.updateOne = async(req,res) => {
    const {idCategory} = req.params
    const {name,description} = req.body

    updateCategory(idCategory,name,description)
    .then(updated => {
        if(typeof(updated) !== 'string'){
            res.status(201).json(updated)
        }else{
            res.status(401).send(updated)
        }
    })
    .catch(err => res.status(401).send(err.message))
}