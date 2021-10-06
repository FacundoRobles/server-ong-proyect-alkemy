const { User } = require('../models/index');

const allUsers = async() => {
    try{
        return await User.findAll()
        .then(users => users)
    }catch(err){
        return err
    }
};

const findOneUser = async(idUser) => {
    return await User.findByPk(idUser);
};

const logicalDeleteUserService = async(idUser) => {
    return await User.findByPk(idUser)
    .then(user => {
        if(user){
            user.destroy()
            return user
        }
        return user
    })
};


module.exports = {
    allUsers,
    findOneUser,
    logicalDeleteUserService
}