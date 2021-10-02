const express = require('express');
const router = express.Router();

const { getMembers,newMember } = require('../controllers/memberController');

router.get('/', (req, res, next) => {
     getMembers()
    .then(members => res.status(201).json(members))
    .catch(err => res.status(401).send(err.message))
    //res.status(201).send('hola')
});

router.post('/', (req, res, next) => {
    const { name,image } = req.body

    newMember(name,image)
    .then(member => {
        if(typeof(member) !== 'string'){
            return res.status(201).json(member)
        }

        res.status(401).send(member)
    })
});

module.exports = router;