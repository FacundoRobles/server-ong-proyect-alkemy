const { Member } = require('../models/index');

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
    .then(member => {
        if(member){
            member.destroy()
            return member
        }
        return member
    })
}

module.exports = {
    allMembers,
    createMember,
    deletedMemberService,
    updateMemberService
}