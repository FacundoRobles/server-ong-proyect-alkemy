const { allMembers,createMember } = require('../services/memberServices')

module.exports = {
    getMembers : async() => {
        return await allMembers()
        .then(members => members)
    },
    
    newMember : async(name, image) => {
        if(name && typeof(name) === 'string' ){
            return await createMember(name, image)
            .then(created => created)
        }
    },

}