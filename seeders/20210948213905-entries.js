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

const news = [
  {
    name: 'Una noticia importante',
    content: 'Este texto es un adelanto a una nota',
    image: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Una noticia importante',
    content: 'Este texto es otro adelanto a una gran nota',
    image: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Una noticia importante',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ante Fusce eros orci, ornare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`,
    image: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Una noticia importante',
    content: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
    quis lobortis eget, vulputate at risus. Nunc non pharetra urna`,
    image: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Una noticia importante',
    content: 'Este texto es un adelanto a una nota',
    image: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Una noticia importante',
    content: 'Este texto es otro adelanto a una gran nota',
    image: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Una noticia importante',
    content: `Lorem ipsnare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`,
    image: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Una noticia importante',
    content: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
    lobortis eget, vulputate at risus. Nunc non pharetra urna.`,
    image: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
    categoryId: 1,
    type:'news',
    createdAt: new Date,
    updatedAt: new Date
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', news, {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
