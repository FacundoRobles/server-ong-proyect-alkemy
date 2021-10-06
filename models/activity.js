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
    image: DataTypes.STRING,
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter the content'
        },
        notEmpty: {
          msg: 'Please enter the content'
        }
      }
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
    paranoid: true,
    timestamps: true
  });
  return Activity;
};
