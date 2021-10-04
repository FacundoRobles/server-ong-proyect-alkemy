'use strict';
const { times } = require('lodash')

const activities = times(3, (i) => ({
    name: `activities ${i+1}`,
    image:`http://www.image.com/${i+1}`,
    content: `this is a description ${i+1}`,
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
