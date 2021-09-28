const testimonial = require('../services/testimonialServices');

module.exports = {
    async createTestimonial(req, res) {
        try {
            if(!req.body.name || !req.body.content){
                res.status(400).send('Please complete all required fields');
            }
            const newTestimonial = testimonial.create(req.body);
            return res.status(201).send(newTransaction);
        } catch(err){
            console.log(err.message);
            return res.status(400).send(err);
        }
    }
}