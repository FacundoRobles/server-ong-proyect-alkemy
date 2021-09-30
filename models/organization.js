'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Organization extends Model {
        static associate(models) {}
    }
    Organization.init(
        {
            facebook: DataTypes.STRING,
            linkedin: DataTypes.STRING,
            instagram: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Organization',
        }
    );
    return Organization;
};
