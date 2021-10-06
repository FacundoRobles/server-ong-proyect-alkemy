const express = require('express');
const router = express.Router();

const { getUsers,validateUserDb,logicalDeleteUser } = require('../controllers/userController');
const { validationResult } = require('express-validator');

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
