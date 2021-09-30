'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    static associate(models) {
    }
  };
  Testimonial.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Testimonial',
    paranoid: true,
    timestamps: true
  });
  return Testimonial;
};