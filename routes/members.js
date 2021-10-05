const express = require('express');
const router = express.Router();

const { getMembers,newMember,deleteMemberController,updateMemberController } = require('../controllers/memberController');

router.get('/', (req, res, next) => {
     getMembers()
    .then(members => res.status(201).json(members))
    .catch(err => res.status(401).send(err.message))
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

router.put('/:idMember', (req, res, next) => {
    const { idMember } = req.params
    const {name, image} = req.body;

    updateMemberController(idMember,name,image)
    .then(member => {
        if(member){
            return res.status(201).send({
                success: true,
                data: `member ${idMember} updated`
            })
        }

        res.status(401).send({
            success: false,
            data: `sorry dont finded member ${idMember}`
        })
    })
});

router.delete('/:idMember', (req, res, next) => {
    const { idMember } = req.params;

    deleteMemberController(idMember)
    .then(member => {
        if(member){
            return res.status(201).send({
                success: true,
                data: `member ${idMember} deleted`
            })
        }

        res.status(401).send({
            success: false,
            data: `sorry dont finded member`
        });
    })
});

module.exports = router;