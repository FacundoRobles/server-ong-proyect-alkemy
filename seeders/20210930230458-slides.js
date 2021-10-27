'use strict';
const { times } = require("lodash");

const slides = times(3,(i) =>({
  imageUrl: `https://picsum.photos/200?random=${i}`,
  text: `image from organization${i}`,
  order:i+1,
  organizationId: 1,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', slides, {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
