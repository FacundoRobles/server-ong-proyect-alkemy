'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Testimonials', [
      {
      name: 'Jorge',
      image: 'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      content: 'Un contenido de prueba',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Marcos',
      image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      content: 'Un segundo contenido de prueba',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Testimonials', null, {});
  }
};
