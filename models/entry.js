'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate(models) {
      // Entry.belongsTo(models.Category, {as: 'category'});
    }
  };
  Entry.init({
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
    image: {
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Category must be setted'
        },
        notEmpty: {
          msg: 'Category must be setted'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter the type'
        },
        notEmpty: {
          msg: 'Please enter the type'
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
    modelName: 'Entry',
  });
  return Entry;
};