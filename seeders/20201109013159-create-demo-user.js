'use strict';
const bcrypt = require('bcrypt')

const hashed = async(password) => {
  let saltRounds = 10;
  return await bcrypt.hash(password, saltRounds).then(pass => pass);
}
let users = []

let createUsers = async() => {
  for(let i = 1; i <= 10; i++){
    let admin = {
        firstName:`User${i}`,
        lastName: `Rich${i}`,
        email: `test${i}@test.com`,
        password: await hashed(`User2021.L${i}`),
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date(),
        updatedAt: new Date(), 
    }
    users.push(admin)
  }
  for(let i = 1; i <= 10; i++){
    let standard = {
        firstName:`User${i+10}`,
        lastName: `Rich${i+10}`,
        email: `test${i+10}@test.com`,
        password: await hashed(`User${i}.L2021`),
        roleId: 2,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date(),
        updatedAt: new Date(), 
    }
    users.push(standard)
  }
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await createUsers()
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};