const { Member } = require('../models/index');

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

const updateMemberService = async(idMember,name,image) => {
    return await Member.findByPk(idMember)
        .then(async(member) => {
            await Member.update({
                name,
                image
            },{
                where:{
                    id: idMember
                }
            })
            return member
        })
}

const deletedMemberService = async (idMember) => {
    return await Member.findByPk(idMember)
}

module.exports = {
    allMembers,
    createMember,
    deletedMemberService,
    updateMemberService
}