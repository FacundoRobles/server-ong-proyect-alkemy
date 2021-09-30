'use strict';
const { times,concat } = require('lodash')

const usersAdmin = times(10, (i) => ({
  firstName:`User${i}`,
  lastName: 'Rich',
  email: `test${i}@test.com`,
  password: '1234',
  roleId: 1,
  image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
  deleted: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}));


const usersStandard = times(10, (i) => ({
  firstName:`User${i + 10}`,
  lastName: 'Rich',
  email: `test${i + 10}@test.com`,
  password: '1234',
  roleId: 2,
  image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
  deleted: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

let users = concat(usersAdmin,usersStandard)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', users, {});
  }
};
