"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fin_plan extends Model {
    static associate({
      User,
      Active,
      Debt,
      Long_target,
      Passive,
      Short_target,
      Income_expense
    }) {
      Fin_plan.belongsTo(User, { foreignKey: "user_id" });

      Active.hasMany(Active, { foreignKey: "fin_plan_id" });
      Debt.hasMany(Debt, { foreignKey: "fin_plan_id" });
      Long_target.hasMany(Long_target, { foreignKey: "fin_plan_id" });
      Passive.hasMany(Passive, { foreignKey: "fin_plan_id" });
      Short_target.hasMany(Short_target, { foreignKey: "fin_plan_id" });
      Income_expense.hasMany(Income_expense, { foreignKey: "fin_plan_id" });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    goal_age: {
      type: DataTypes.INTEGER,
    },
    cash_per_mouth_min: {
      type: DataTypes.INTEGER,
    },
    start_capital: {
      type: DataTypes.INTEGER,
    },
    cash_per_mouth_max: {
      type: DataTypes.INTEGER,
    },
    cash_per_mouth: {
      type: DataTypes.INTEGER,
    },
    finish_age_max: {
      type: DataTypes.INTEGER,
    },
    finish_age_min: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
    modelName: "Fin_plan",
    tableName: "Fin_plans",
  };
  Fin_plan.init(attributes, options);
  return Fin_plan;
};
