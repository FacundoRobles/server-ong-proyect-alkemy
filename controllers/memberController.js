const { allMembers, createMember, updateMember, deleteMember } = require('../services/memberServices')

module.exports = {
    getMembers: async () => {
        return await allMembers()
            .then(members => members)
    },

    newMember: async (name, image) => {
        if (name && typeof (name) === 'string') {
            return await createMember(name, image)
                .then(created => created)
        }
    },

    updateOne: async (idMember, name, image) => {
        return await updateMember(idMember, name, image)
            .then(member => {
                if (member) {
                    return member
                }
            })
    },

    deleteOne: async (idMember) => {
        return await deleteMember(idMember)
            .then(member => {
                if (member) {
                    return member
                }
            })
    }

}