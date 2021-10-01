const { User } = require('../models/index')

const allUsers = async() => {
    try{
        return await User.findAll()
        .then(users => users)
    }catch(err){
        return err
    }
}


module.exports = {
    allUsers
}