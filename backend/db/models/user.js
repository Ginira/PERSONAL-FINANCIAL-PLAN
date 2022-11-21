"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Fin_plan }) {
      User.hasMany(Fin_plan, { foreignKey: "user_id" });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        is: /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        isEmail: true,
      },
    },
    avatar: {
      type: DataTypes.TEXT,
      defaultValue:
        "https://cdn.store-assets.com/s/391095/f/5163613.jpeg?width=1500",
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
    modelName: "User",
    tableName: "Users",
  };
  User.init(attributes, options);
  return User;
};
