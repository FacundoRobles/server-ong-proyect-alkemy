const { allUsers, findOneUser, logicalDeleteUserService } = require('../services/userServices');
const { check } = require('express-validator');

module.exports = {
    getUsers: async() => {
        return await allUsers()
        .then(users => users)
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