'use strict';
const { times } = require('lodash')

const activities = times(3, (i) => ({
    name: `activities ${i}`,
    description: `this is a description ${i}`,
    deleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Activities', activities, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Activities', null, {});
  }
};
