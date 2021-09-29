const testimonial = require('../models').Testimonial;

module.exports = {
    async create(body) {
        return await testimonial.create(body);
    }
}