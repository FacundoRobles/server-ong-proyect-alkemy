'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
    }
  };
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};