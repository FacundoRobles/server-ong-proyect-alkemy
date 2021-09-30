'use strict';
const { times } = require("lodash");

const entries = times(5,(i) =>({
  name: `Novedad${i}`,
  content: `semilla ${i}`,
  image: `www.image${i}.com`,
  categoryId: 1,
  type: 'news',
  createdAt: new Date,
  updatedAt: new Date
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', entries, {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
