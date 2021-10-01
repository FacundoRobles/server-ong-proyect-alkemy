'use strict';
const { times } = require("lodash");

const slides = times(5,(i) =>({
  imageUrl: `www.image${i+1}.com`,
  text:'image from organization',
  order:i+1,
  organizationId: 1,
  createdAt: new Date,
  updatedAt: new Date
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', slides, {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
