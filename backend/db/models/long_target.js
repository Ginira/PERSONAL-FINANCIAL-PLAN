'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Long_target extends Model {
 
    static associate({ Fin_plan}) {
      Long_target.belongsTo(Fin_plan, { foreignKey: 'fin_plan_id', onDelete: 'cascade' });
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
    goal_age_target: {
      type: DataTypes.INTEGER
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
    modelName: 'Long_target',
    tableName: 'Long_targets'
  }
  Long_target.init( attributes, options);
  return Long_target;
};