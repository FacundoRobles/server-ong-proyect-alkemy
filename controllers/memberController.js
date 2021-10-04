const { allMembers } = require('../services/memberServices')

module.exports = {
    getMembers : async() => {
        return await allMembers()
        .then(members => members)
    },

}