'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income_expense extends Model {

    static associate({Fin_plan}) {
      Income_expense.belongsTo(Fin_plan, { foreignKey: 'fin_plan_id', onDelete: 'cascade' });
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
    avg_mouth_income: {
      type: DataTypes.INTEGER
    },
    avg_mouth_expenses: {
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
    modelName: 'Income_expense',
    tableName: 'Income_expenses'
  }
  Income_expense.init(attributes, options);
  return Income_expense;
};