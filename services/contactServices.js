const contact = require('../models').Contact;

module.exports = {
    async create(body) {
        return await contact.create(body);
    },
    async delete(contactToDelete) {
        return await contactToDelete.destroy();
    },
    async fetchAll() {
        return await contact.findAll();
    },
    async fetchOne(id){
        return await contact.findByPk(id);
    },
    async update(body, contactToUpdate){
        return await contactToUpdate.update(body);
    }
}