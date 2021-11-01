'use strict';
const { times } = require('lodash')

const activities = times(3, (i) => ({
    name: `activities ${i+1}`,
    image:`https://picsum.photos/200?random=${i}`,
    content: `this is a description ${i+1}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  
  const activitiesArr = [
    {
      name: 'Una actividad especial',
      image: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
      content: 'Este texto es un adelanto a una nota',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Una actividad especial',
      image: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
      content: 'Este texto es otro adelanto a una gran nota',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Una actividad especial',
      image: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ante ac nunc feugiat rhoncus.
      Fusce eros orci, ornare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Una actividad especial',
      image: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
      content: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
      Vulputate at risus. Nunc non pharetra urna.`,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Una actividad especial',
      image: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
      content: 'Este texto es un adelanto a una nota',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Una actividad especial',
      image: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
      content: 'Este texto es otro adelanto a una gran nota',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Una actividad especial',
      image: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ante Fusce eros orci, ornare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Una actividad especial',
      image: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
      createdAt: new Date,
      updatedAt: new Date,
        content: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
        Nulla dui urna, vulputate quis lobortis eget, vulputate at risus. Nunc non pharetra urna.`
    }
  ];

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Activities', activitiesArr);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Activities', null, {});
  }
};
