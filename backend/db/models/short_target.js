'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Short_target extends Model {
   
    static associate({Fin_plan}) {
      Short_target.belongsTo(Fin_plan, { foreignKey: 'fin_plan_id', onDelete: 'cascade' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fin_plan_id: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.TEXT
    },
    price_target: {
      type: DataTypes.INTEGER
    },
    date_target: {
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }
  const options = {
    sequelize,
    modelName: 'Short_target',
    tableName: 'Short_targets'
  }
  Short_target.init( attributes, options);
  return Short_target;
};