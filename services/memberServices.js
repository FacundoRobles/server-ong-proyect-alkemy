const { Member } = require('../models/index')

const allMembers = async () => {
    return await Member.findAll({ raw: true })
        .then(members => members)
}

const createMember = async (name, image) => {
    return await Member.create({
        name,
        image
    })
        .then(member => member)
}

const updateMember = async (idMember, name, image) => {
    return await Member.findByPk(idMember)
        .then(async (member) => {
            if (member !== null) {
                await Member.update({
                    name,
                    image
                }, {
                    where: {
                        id: idMember
                    }
                })
                return member
            }
            return
        })
}

const deleteMember = async (idMember) => {
    return await Member.findByPk(idMember)
        .then(async (member) => {
            if (member !== null) {
                await Member.update({
                    deleted: true,
                    deletedAt: new Date()
                }, {
                    where: {
                        id: idMember
                    }
                })
                return member
            }
            return
        })
}

module.exports = {
    allMembers,
    createMember,
    updateMember,
    deleteMember
}