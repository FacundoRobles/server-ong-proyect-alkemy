'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    static associate(models) {
      Entry.belongsTo(models.Organization, {as: 'organization'});

    }
  };
  Slide.init({
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter the image URL'
        },
        notEmpty: {
          msg: 'Please enter the image URL'
        }
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter some text'
        },
        notEmpty: {
          msg: 'Please enter some text'
        }
      }
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Order must be setted'
        },
        notEmpty: {
          msg: 'Order must be setted'
        }
      }
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Organization must be setted'
        },
        notEmpty: {
          msg: 'Organization must be setted'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Slide',
  });
  return Slide;
};