'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Active extends Model {
 
    static associate({Fin_plan}) {
      Active.belongsTo(Fin_plan, { foreignKey: 'fin_plan_id', onDelete: 'cascade'});
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
    price: {
      type: DataTypes.INTEGER
    },
    income: {
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
    modelName: 'Active',
    tableName: 'Actives'
  }
  Active.init(attributes, options);
  return Active;
};