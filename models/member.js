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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a name'
        },
        notEmpty: {
          msg: 'Please enter a name'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter an image'
        },
        notEmpty: {
          msg: 'Please enter an image'
        }
      }
    },
    deletedAt: DataTypes.DATE,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Member',
    paranoid: true,
    timestamps: true
  });
  return Member;
};