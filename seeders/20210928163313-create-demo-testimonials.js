'use strict';
const times = require('lodash/times');


const testTestimonials = times(4, (i) => ({
  name: `testimon${i}`,
  image: `http://google.com/${i}`,
  content: `Contenido numero ${i}`,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
}))
module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Testimonials', testTestimonials, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};
