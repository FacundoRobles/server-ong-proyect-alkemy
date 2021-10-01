const testimonial = require('../models').Testimonial;

module.exports = {
    async create(body) {
        return await testimonial.create(body);
    },
    async delete(testimonialToDelete) {
        return await testimonialToDelete.destroy();
    },
    async fetchAll() {
        return await testimonial.findAll();
    },
    async fetchOne(id){
        return await testimonial.findByPk(id);
    },
    async update(body, testimonialToUpdate){
        return await testimonialToUpdate.update(body);
    }
}