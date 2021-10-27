const express = require('express');
const router = express.Router();

const { getUsers,validateUserDb,logicalDeleteUser, getOneUser, updateUser } = require('../controllers/userController');
const { validationResult } = require('express-validator');
const { passport } = require('../middlewares/passport.middleware')

router.get('/',passport.authenticate('jwt', { session: false }), (req, res, next) => {

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

router.get('/:id',passport.authenticate('jwt', { session: false }), (req, res, next) => {

    getOneUser(req.params.id)
    .then(user => res.status(201).send({
      success: true,
      data: user
    }))
    .catch(err =>  res.status(401).send({
      success: false,
      data: err
    }))
});

router.put('/:id', (req, res, next) => {
    updateUser(req.params.id, req.body)
    .then(user => res.status(201).send({
      success: true,
      data: user
    }))
    .catch(err =>  res.status(401).send({
      success: false,
      data: err
    }))
});

router.delete('/:idUser', validateUserDb,(req, res, next) => {
  const { idUser } = req.params;

  const errors = validationResult(req);
    
  if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
  }

  logicalDeleteUser(idUser)
  .then(updated => {
      if(updated){
          return res.status(201).send({
              success: true,
              data: `user ${idUser} erased`
          })
      };
      res.status(401).send({
          success: false,
          data: `sorry dont finded user ${idUser}`
      });
  });
});

module.exports = router;
