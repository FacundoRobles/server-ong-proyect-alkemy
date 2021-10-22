'use strict';
const times = require('lodash/times');


const testTestimonials = times(5, (i) => ({
  name: `testimonio nº ${i}`,
  image: `https://picsum.photos/200?random=${i}`,
  content: `Contenido <i>de</i> <b>prueba</b> numero <b>${i}</b>`,
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
