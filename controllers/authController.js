const { createUser,verifyEmail } = require('../services/authServices')
const { body } = require('express-validator');
const bcrypt = require('bcrypt')

const saltRounds = 10;

module.exports = {
    newUser: async(userData) => {
        return bcrypt.hash(userData.password,saltRounds)
        .then(async (hash) => {
            let newUserData = {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                image: userData.image,
                password: hash
            }
           return await createUser(newUserData)     
        })
    },
    validationUserFields: [
        body('email','must be a email').isEmail()
        .custom(async(email) => {
            await verifyEmail(email)
            .then(user => {
                if (user) {
                    return Promise.reject('E-mail already in use');
                }
            });
        }),
        body('firstName','please insert a name').not().isEmpty(),
        // body('image','please insert a image').not().isEmpty(), for the future 
        body('lastName','please insert a last name').not().isEmpty(),
        body('password','please insert a password')
        .not().isEmpty()
        .isLength({ min: 6 })
        .withMessage('must be at least 6 chars long')
        .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/)
        .withMessage('at least one digit, at least one lowercase, and at least one uppercase. It may have other symbols')
    ],
    validationLoginFields: [
        body('password','please insert a password').not().isEmpty(),
        body('email','must be a email').not().isEmpty()
        .withMessage('not has be empty')
        .isEmail()
        .withMessage('must be a email')
    ]

}