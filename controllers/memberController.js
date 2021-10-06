const { allMembers,createMember,updateMemberService,deletedMemberService } = require('../services/memberServices')
const { isEmpty,isString } = require('lodash')

module.exports = {
    getMembers: async () => {
        return await allMembers()
            .then(members => members)
    },

    newMember: async (name, image) => {
        if (!isEmpty(name) && isString(name)) {
            return await createMember(name, image)
                .then(created => created)
        }
    },

    updateMemberController : async (idMember,name,image) => {
        if(!isEmpty(name) && isString(name)){
            return await updateMemberService(idMember,name,image)
        }
    },

    deleteMemberController : async (idMember) => {
        return await deletedMemberService(idMember)
    }

}