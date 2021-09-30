'use strict';
const times = require('lodash/times');

const testContacts = times(4, (i) => ({
  name: `ContactName${i}`,
  phone: `14${i}5-3467-${i}`,
  email: `contact${i}@gmail.com`,
  message: `A new message number ${i}`,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contacts', testContacts, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};