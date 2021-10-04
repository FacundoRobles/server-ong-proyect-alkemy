'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate(models) {

    }
  };
  Member.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};