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
    return await User.update({
        deleted: true,
        deletedAt: new Date()
    },{
        where:{
            id: idUser
        }
    });
};


module.exports = {
    allUsers,
    findOneUser,
    logicalDeleteUserService
}