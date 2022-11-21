'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passive extends Model {
   
    static associate({Fin_plan}) {
      Passive.belongsTo(Fin_plan, { foreignKey: 'fin_plan_id', onDelete: 'cascade' });
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
    modelName: 'Passive',
    tableName: 'Passives'
  }
  Passive.init( attributes, options);
  return Passive;
};