const testimonial = require('../services/testimonialServices');

module.exports = {
    async createTestimonial(req, res) {
        try {
            if(!req.body.name || !req.body.content){
                res.status(400).send({
                    success: false,
                    message:'Please complete all required fields'
                });
            }
            const newTestimonial = testimonial.create(req.body);
            const response = {
                success: true,
                data: {
                    testimonials: newTestimonial
                }
            };
            return res.status(201).send(response);
        } catch(err){
            console.log(err.message);
            const response = {
                success: false,
                message: err.message
            }
            return res.status(400).send(response);
        }
    }
}