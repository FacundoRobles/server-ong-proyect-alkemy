const { Member } = require('../models/index')

const allMembers = async () => {
    return await Member.findAll({raw: true})
    .then(members => members)
}

module.exports = {
    allMembers,
}