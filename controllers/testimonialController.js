const testimonial = require('../services/testimonialServices');

module.exports = {
    async createTestimonial(req, res) {
        try {
            if (!req.body.name || !req.body.content) {
                res.status(400).send({
                    success: false,
                    message: 'Please complete all required fields'
                });
            }
            const newTestimonial = await testimonial.create(req.body);
            return res.status(201).send({
                success: true,
                data: {
                    testimonials: newTestimonial
                }
            });
        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });
        }
    },
    async deleteTestimonial(req, res) {
        try {

            const testimonialToDelete = await testimonial.fetchOne(req.params.id);
            if (testimonialToDelete) {
                const deletedTestimonial = await testimonial.delete(testimonialToDelete);
                return res.status(200).send({
                    success: true,
                    data: {
                        testimonials: deletedTestimonial
                    }
                });
            }
            return res.status(404).send({
                success: false,
                message: 'Testimonial to delete not found'
            });

        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });

        }
    },
    async fetchTestimonials(req, res) {
        try {
            if (!req.params.id) {
                const allTestimonials = await testimonial.fetchAll();
                return res.status(200).send({
                    success: true,
                    data: {
                        testimonials: allTestimonials
                    }
                });
            }
            const getTestimonial = await testimonial.fetchOne(req.params.id);
            return res.status(200).send({
                success: true,
                data: {
                    testimonials: getTestimonial
                }
            });

        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });
        }
    },
    async updateTestimonial(req, res) {
        console.log(req.body)
        try {
            const testimonialToUpdate = await testimonial.fetchOne(req.params.id);
            if (testimonialToUpdate) {
                await testimonial.update(req.body, testimonialToUpdate);
                const updatedTestimonial = await testimonial.fetchOne(req.params.id);
                return res.status(201).send({
                    success: true,
                    data: {
                        testimonials: updatedTestimonial
                    }
                });
            }
            return res.status(404).send({
                success: false,
                message: 'Testimonial to update not found'
            });

        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });

        }
    }
}