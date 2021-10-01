'use strict';
const times  = require('lodash/times')

const categories = times(5, (i) => ({
  name: `category ${i}`,
  description: `this is a description`,
  deleted: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
