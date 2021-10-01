const express = require('express');
const router = express.Router();

const { getMembers } = require('../controllers/memberController');

router.get('/', (req, res, next) => {
     getMembers()
    .then(members => res.status(201).json(members))
    .catch(err => res.status(401).send(err.message))
    //res.status(201).send('hola')
});

module.exports = router;