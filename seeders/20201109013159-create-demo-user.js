'use strict';
const bcrypt = require('bcrypt')

const hashed = async (password) => {
  let saltRounds = 10;

  return await bcrypt.hash(password,saltRounds).then(pass => pass)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName:`User1`,
      lastName: 'Rich1',
      email: `test1@test.com`,
      password: await hashed(`User2021.L1`),
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date(), 
    },{
      firstName:`User2`,
      lastName: 'Rich2',
      email: `test2@test.com`,
      password: await hashed(`User2.L2021`),
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
