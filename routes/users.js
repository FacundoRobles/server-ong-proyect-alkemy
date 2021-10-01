const express = require('express');
const router = express.Router();

const { getUsers } = require('../controllers/userController')

router.get('/', (req, res, next) => {

    getUsers()
    .then(users => res.status(201).send({
      success: true,
      data: users
    }))
    .catch(err =>  res.status(401).send({
      success: false,
      data: err
    }))
});

module.exports = router;
