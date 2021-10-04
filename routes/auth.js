const express = require('express');
const router = express.Router();

const { newUser,validationUserFields } = require('../controllers/authController');
const { validationResult } = require('express-validator');

router.post('/register',validationUserFields,(req, res, next) => {
    const { firstName,lastName,email,image,password } = req.body;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }

    let userData = {
        firstName,
        lastName,
        email,
        image,
        password
    }

    newUser(userData)
    .then(user => res.status(201).send({
        success: true,
        data: user
    }))
    .catch(err => res.status(401).send({
        success: false,
        data: err.message
    }))
    
});

module.exports = router;

