'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'Transitory',
        description: 'this is a description',
        deletedAt: new Date,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Test',
        description: 'this is a description',
        deletedAt: new Date,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Highest',
        description: 'this is a description',
        deletedAt: new Date,
        createdAt: new Date,
        updatedAt: new Date
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
