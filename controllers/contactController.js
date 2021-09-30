const contact = require('../services/contactServices');

module.exports = {
    async createContact(req, res) {
        try {
            if (!req.body.name || !req.body.email) {
                return res.status(400).send({
                    success: false,
                    message: 'Please complete all required fields'
                });
            }
            const newContact = await contact.create(req.body);
            return res.status(201).send({
                success: true,
                data: {
                    contacts: newContact
                }
            });
        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });
        }
    }
}