'use strict';
const { times } = require("lodash");

const organizations = times(5,(i) =>({
  name:`Organization${i+1}`,
  image:`https://picsum.photos/200?random=${i}`,
  phone: 155678942 + i,
  address:`Dorrego 1${i}43`,
  welcomeText: `Welcome to Organization${i+1}`,
  socialNetworks: JSON.stringify({
    facebook: `https://www.facebook.com/fundacionsomosmasok`,
    linkedin: `www.linkedin.com/organization${i+1}`,
    instagram: `www.instragram.com/organization${i+1}`
  }),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', organizations, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Organizations', null, {});
  }
};
