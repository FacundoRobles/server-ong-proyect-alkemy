const { Member } = require('../models/index')

const allMembers = async () => {
    return await Member.findAll({raw: true})
    .then(members => members)
}

const createMember = async (name,imagen) => {
    return await Member.create({
        name,
        imagen
    })
    .then(member => member)
}

module.exports = {
    allMembers,
    createMember
}