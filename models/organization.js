'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Organization extends Model {
        static associate(models) {}
    }
    Organization.init(
        {   
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Please enter the Organization name'
              },
              notEmpty: {
                msg: 'Please enter the Organization name'
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
          phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Please enter the Organization phone'
              },
              notEmpty: {
                msg: 'Please enter the Organization phone'
              }
            }
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Please enter the Organization address'
              },
              notEmpty: {
                msg: 'Please enter the Organization address'
              }
            }
          },
          welcomeText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Please enter the Organization welcome text'
              },
              notEmpty: {
                msg: 'Please enter the Organization welcome text'
              }
            }
          },
          facebook: DataTypes.STRING,
          linkedin: DataTypes.STRING,
          instagram: DataTypes.STRING,
          deletedAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Organization',
            paranoid: true,
    timestamps: true
        }
    );
    return Organization;
};
