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
    },
    async fetchContacts(req, res) {
        try {
            if (!req.params.id) {
                const allContacts = await contact.fetchAll();
                return res.status(200).send({
                    success: true,
                    data: {
                        contacts: allContacts
                    }
                });
            }
            const getContact = await contact.fetchOne(req.params.id);
            return res.status(200).send({
                success: true,
                data: {
                    contacts: getContact
                }
            });

        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });
        }
    },

    async updateContact(req, res) {
        try {
            const contactToUpdate = await contact.fetchOne(req.params.id);
            if (contactToUpdate) {
                const updatedContact = await contact.update(req.body, contactToUpdate);
                return res.status(204).send({
                    success: true,
                    data: {
                        contacts: updatedContact
                    }
                });
            }
            return res.status(404).send({
                success: false,
                message: 'Contact to update not found'
            });

        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });

        }
    },

    async deleteContact(req, res) {
        try {
            const contactToDelete = await contact.fetchOne(req.params.id);
            if (contactToDelete) {
                const deletedContact = await contact.delete(contactToDelete);
                return res.status(204).send({
                    success: true,
                    data: {
                        contacts: deletedContact
                    }
                });
            }
            return res.status(404).send({
                success: false,
                message: 'Contact to delete not found'
            });

        } catch (err) {
            return res.status(400).send({
                success: false,
                message: err.message
            });

        }
    }
}