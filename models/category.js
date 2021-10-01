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
<<<<<<< HEAD
    deleted: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
=======
    deletedAt: DataTypes.DATE,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
>>>>>>> 65c3d9e608a6139a3f53d21af7db092b86ce416b
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};