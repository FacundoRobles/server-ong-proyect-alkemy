const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

/* POST testimonials listing. */

router.post('/', contactController.createContact);
router.get('/', contactController.fetchContacts);
router.get('/:id', contactController.fetchContacts);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);


module.exports = router;