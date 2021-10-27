const { User } = require('../models/index');

const allUsers = async() => {
    try{
        return await User.findAll()
        .then(users => users)
    }catch(err){
        return err
    }
};

const updateUser = async ( id , object) => {
    const user = await User.findOne({ where: { id } });
    if (!user) {
        throw Error();
    }

    await User.update({ ...object, updateAt: new Date() }, { where: { id } });
    return object;
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
    updateUser,
    findOneUser,
    logicalDeleteUserService
}