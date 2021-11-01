'use strict';

const slides = [{
  imageUrl: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635482510/slide%20somos%20mas/Manos_10_n65uw7.jpg',
  text: 'Manualidades',
  order:1,
  organizationId: 1,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
},
{
  imageUrl: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635482510/slide%20somos%20mas/Foto_10_jmmtf9.jpg',
  text: 'El juego del plato',
  order:2,
  organizationId: 1,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
},
{
  imageUrl: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635482510/slide%20somos%20mas/Foto_11_shacbr.jpg',
  text: 'Practicando deportes',
  order:3,
  organizationId: 1,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
}]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', slides, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Slides', null, {});
  }
};
