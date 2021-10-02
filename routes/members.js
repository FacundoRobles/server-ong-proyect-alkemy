const express = require('express');
const router = express.Router();

const { getMembers, newMember, updateOne } = require('../controllers/memberController');

router.get('/', (req, res, next) => {
    getMembers()
        .then(members => res.status(201).json(members))
        .catch(err => res.status(401).send(err.message))
    //res.status(201).send('hola')
});

router.post('/', (req, res, next) => {
    const { name, image } = req.body

    newMember(name, image)
        .then(member => {
            if (typeof (member) !== 'string') {
                return res.status(201).json(member)
            }
            res.status(401).send(member)
        })
});

 router.put('/:idMember', (req, res, next) => {
    const { idMember } = req.params
    const { name, image } = req.body

    updateOne(idMember, name, image)
        .then(updated => {
            console.log(updated)
            if (updated) {
                return res.status(201).json(`member ${idMember} modified`)
            }})
        .catch (err => res.status(401).send(`sorry dont finded member ${idMember}`)) 
})



module.exports = router;