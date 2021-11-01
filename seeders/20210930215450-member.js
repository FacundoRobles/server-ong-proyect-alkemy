'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Members', [{
      name: 'Cecilia Mendez',
      image: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635454054/members%20ONG/Cecilia_Mendez_harl3q.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marco Fernandez',
      image: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635454054/members%20ONG/Marco_Fernandez_j984bq.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'María Garcia',
      image: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635454054/members%20ONG/Mar%C3%ADa_Garcia_phi5kv.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'María Irola',
      image: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635454055/members%20ONG/Mar%C3%ADa_Irola_zgj5rq.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marita Gomez',
      image: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635454054/members%20ONG/Marita_Gomez_ig3hwa.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Miriam Rodriguez',
      image: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635454054/members%20ONG/Miriam_Rodriguez_xvsblw.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rodrigo Fuente',
      image: 'https://res.cloudinary.com/djnhaprmj/image/upload/v1635454056/members%20ONG/Rodrigo_Fuente_o3mjve.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
  }
};
