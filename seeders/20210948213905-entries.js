'use strict';
const { times } = require("lodash");

const entries = times(5,(i) =>({
  name: `Novedad${i}`,
  content: `semilla ${i}`,
  image: `https://picsum.photos/200?random=${i}`,
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
    await queryInterface.bulkDelete('Entries', null, {});
  }
};
