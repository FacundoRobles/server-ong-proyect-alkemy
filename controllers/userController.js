const { allUsers } = require('../services/userServices')

module.exports = {
    getUsers: async() => {
        return await allUsers()
        .then(users => users)
        .catch(err => err)
    }
}