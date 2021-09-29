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
    },
    async deleteTestimonial(req, res) {
        try {
            const testimonialToDelete = await testimonial.fetchOne(req.params.id);
            if(testimonialToDelete){
                const deletedTestimonial = await testimonial.delete(testimonialToDelete);
                return res.status(204).send({
                    success: true,
                    data: {
                        testimonials: deletedTestimonial
                    }
                });
            } else{
            return res.status(404).send({
                success: false,
                message: 'Testimonial to delete not found'
            });
        }
        } catch(err){
            console.log(err.message);
            return res.status(400).send({
                success: false,
                message: err.message
            });

        }
    },
    async fetchTestimonials(req, res){
        try {
            if(!req.params.id){
            const allTestimonials = await testimonial.fetchAll();
            return res.status(200).send({
                success: true,
                data: {
                    testimonials: allTestimonials
                }
            });
        } else {
            const getTestimonial = await testimonial.fetchOne(req.params.id);
            return res.status(200).send({
                success: true,
                data: {
                    testimonials: getTestimonial
                }
            });
        }
        } catch (err){
            console.log(err.message);
            return res.status(400).send({
                success: false,
                message: err.message
            });
        }
    },
    async updateTestimonial(req, res) {
        try {
            const testimonialToUpdate = await testimonial.fetchOne(req.params.id);
            if(testimonialToUpdate){
                const updatedTestimonial = await testimonial.update(req.body, testimonialToUpdate);
                return res.status(204).send({
                    success: true,
                    data: {
                        testimonials: updatedTestimonial
                    }
                });
            } else{
            return res.status(404).send({
                success: false,
                message: 'Testimonial to update not found'
            });
        }
        } catch(err){
            console.log(err.message);
            return res.status(400).send({
                success: false,
                message: err.message
            });

        }
    }
}