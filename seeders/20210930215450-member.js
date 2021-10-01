'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Members', [{
      name: 'Pepe',
      image: 'google.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pepe2',
      image: 'google.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pepe3',
      image: 'google.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },
};
