'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', [
      {
        name: 'Novedad1',
        content: 'Primera semilla',
        image: 'www.image.com',
        categoryId: 1,
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Novedad2',
        content: 'Segunda semilla',
        image: 'www.image2.com',
        categoryId: 2,
        type: 'event',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Novedad3',
        content: 'Tercera semilla',
        image: 'www.image3.com',
        categoryId: 1,
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
