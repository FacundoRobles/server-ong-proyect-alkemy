'use strict';
const { times } = require('lodash')

const categories = times(3, (i) => ({
  name: `category ${i}`,
  description: 'this is a description',
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', categories, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
