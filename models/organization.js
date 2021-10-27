'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Organization extends Model {
        static associate(models) {
          Organization.hasMany(models.Slide, {
            foreignKey: 'organizationId',
            as: 'items'
          })
        }
    }
    Organization.init({   
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          image: {
            type: DataTypes.STRING,
            allowNull: false
          },
          phone: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false
          },
          welcomeText: {
            type: DataTypes.STRING,
            allowNull: false
          },
          socialNetworks: {
            type: DataTypes.JSON,
            allowNull: false
          },
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
