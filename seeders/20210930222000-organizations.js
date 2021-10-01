'use strict';
const { times } = require("lodash");

const organizations = times(5,(i) =>({
  facebook: `www.facebook.com/organization${i+1}`,
  linkedin: `www.linkedin.com/organization${i+1}`,
  instagram: `www.instragram.com/organization${i+1}`,
  createdAt: new Date(),
  updatedAt: new Date(),
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', organizations, {});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
