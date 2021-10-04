const { Activity } = require('../models/index')

module.exports = {
    async create({id},body){
        return await Activity.create(body)
    }
    
}
