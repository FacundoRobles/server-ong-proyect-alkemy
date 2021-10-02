const express = require('express');
const router = express.Router();

const { getMembers, newMember, updateOne, deleteOne } = require('../controllers/memberController');

router.get('/', (req, res, next) => {
    getMembers()
        .then(members => res.status(201).send({
            success: true,
            data: members,
        }))
        .catch(err => res.status(401).send({
            success: false,
            data: err.message
        }))
});

router.post('/', (req, res, next) => {
    const { name, image } = req.body

    newMember(name, image)
        .then(member => {
            if (typeof (member) !== 'string') {
                return res.status(201).send({
                    success: true,
                    data:`member ${name} has created`
                })
            }
            res.status(401).send({
                success: false,
                data: `sorry can't create ${name}`,
            })
        })
});

router.put('/:idMember', (req, res, next) => {
    const { idMember } = req.params
    const { name, image } = req.body

    if (name) {
        return updateOne(idMember, name, image)
            .then(updated => {
                if (updated) {
                    return res.status(201).send({
                        success: true,
                        data: `member ${idMember} has modified to ${name}`
                    })
                }
            })
            .catch(err => res.status(401).send({
                success: false,
                data: `sorry dont finded member ${idMember}` 
            }))
    }
    return deleteOne(idMember)
        .then(deleted => {
            if (deleted) {
                return res.status(201).json({
                    success: true,
                    data: `member ${idMember} has deleted`,
                })
            }
        })
        .catch(err => res.status(401).send({
            success: false,
            data: `sorry dont finded member ${idMember}`, 
        }))
})

module.exports = router;