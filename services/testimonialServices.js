const testimonial = require('../models/testimonial').Testimonial;

module.exports = {
    async create(body) {
        return await testimonial.create(body);
    }
}