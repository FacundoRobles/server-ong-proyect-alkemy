const express = require('express');
const router = express.Router();
const {get} = require('lodash');

const { getMembers,newMember,deleteMemberController,updateMemberController } = require('../controllers/memberController');

router.get('/', (req, res, next) => {
    getMembers()
        .then(members => res.status(201).send({
            success: true,
            data: members,
        }))
        .catch(err => res.status(401).send({
            success: false,
            data: get(
                err,
                'errors[0].message',
                'Could not insert that member'
            ),
        }))
});

router.post('/', async (req, res, next) => {
    try{
        const { name, image } = req.body
    
        await newMember(name, image)
            .then(val =>
                res.status(201).send({
                    success: true,
                    data: val,
                })
            )
            .catch(err =>
                res.status(401).send({
                    success: false,
                    message: get(
                        err,
                        'errors[0].message',
                        'Could not insert that member'
                    ),
                })
            );
    } catch(err) {
        next(err);
    }
});

router.put('/:idMember', (req, res, next) => {
    const { idMember } = req.params
    const {name, image} = req.body;

    updateMemberController(idMember, name, image)
    .then(val =>
        res.status(201).send({
            success: true,
            data: val,
        })
    )
    .catch(err =>
        res.status(401).send({
            success: false,
            message: get(
                err,
                'errors[0].message',
                'Could not update that member'
            ),
        })
    );
});

router.delete('/:idMember', (req, res, next) => {
    const { idMember } = req.params;

    deleteMemberController(idMember)
    .then(member => {
        if(member){
            return res.status(201).send({
                success: true,
                data: member
            })
        }

        res.status(401).send({
            success: false,
            data: `Could not delete that member`
        });
    })
});

module.exports = router;