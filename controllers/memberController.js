const { allMembers,createMember,updateMemberService,deletedMemberService } = require('../services/memberServices');

module.exports = {
    getMembers: async () => {
        return await allMembers();
    },

    newMember: async (name, image) => {
        return await createMember(name, image)
    },

    updateMemberController : async (idMember,name,image) => {
            return await updateMemberService(idMember,name,image);
    },

    deleteMemberController : async (idMember) => {
        return await deletedMemberService(idMember);
    }

}