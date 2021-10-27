'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    static associate(models) {
      Slide.belongsTo(models.Organization, {
        foreignKey: 'organizationId'
      });
    }
  };
  Slide.init({
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    organizationId: {
      allowNull: false,
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
      references: {
        model: 'Organizations',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Slide',
    paranoid: true,
    timestamps: true
  });
  return Slide;
};