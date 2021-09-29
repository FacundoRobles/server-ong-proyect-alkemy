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
            const newTestimonial = await testimonial.create(req.body);
            return res.status(201).send({
                success: true,
                data: {
                    testimonials: newTestimonial
                }
            });
        } catch(err){
            console.log(err.message);
            return res.status(400).send({
                success: false,
                message: err.message
            });
        }
    }
}