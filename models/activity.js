'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate(models) {
      
    }
  };
  Activity.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};