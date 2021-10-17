const express = require('express');
const router = express.Router();

const { newUser,validationUserFields,validationLoginFields } = require('../controllers/authController');
const { validationResult } = require('express-validator');
const  { getTemplate: sendMail } = require('../services/mailingServices');
const { passport,messageError } = require('../middlewares/passport.middleware');
const jwt = require('jsonwebtoken');

const { SECRET_TOKEN } = process.env

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
    .then(user => {
      sendMail(email, firstName, 'welcome');
      return res.status(201).send({
        success: true,
        data: user
    })})
    .catch(err => res.status(401).send({
        success: false,
        data: err.message
    }))
    
});

router.post('/login',validationLoginFields,(req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }
    
    return passport.authenticate('local', {session: false}, (err, user, response) => {

      if(response?.message === messageError.password){
        return res.status(401).send({
            success: false,
            data: 'Password invalid try again'
        })
      }
      if(response?.message === messageError.email){
        return res.status(401).send({
            success: false,
            data: 'Email invalid try again'
        })
      }
      req.logIn(user, {session: false}, (err) => {
        
        if (err) return next(err); 

          const token = jwt.sign({ user }, SECRET_TOKEN, { expiresIn: '25m' })

        return res.status(201).send({
            success: true,
            data: token
        });
      });
    })(req, res, next)
});

router.get('/me', passport.authenticate('jwt', { session: false }),(req, res, next) => {

    res.status(201).send({
      success: true,
      data: req.user
    })
})

module.exports = router;

