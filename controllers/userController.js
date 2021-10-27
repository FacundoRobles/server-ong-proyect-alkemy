const { allUsers, findOneUser, updateUser, logicalDeleteUserService } = require('../services/userServices');
const { check } = require('express-validator');

module.exports = {
    getUsers: async() => {
        return await allUsers()
        .then(users => users)
        .catch(err => err)
    },
    getOneUser: async(id) => {
        return await findOneUser(id)
        .then(user => user)
        .catch(err => err)
    },
    updateUser: async(id, object) => {
        return await updateUser(id, object)
        .then(user => user)
        .catch(err => err)
    },
    logicalDeleteUser: async(idUser) => {
        return await logicalDeleteUserService(idUser);
    },
    validateUserDb: [
        check('idUser')
        .custom(async(idUser) => {
            await findOneUser(idUser)
            .then(user => {
                if (!user) {
                    return Promise.reject('Sorry user not finded');
                }
            });
        })
    ]
}