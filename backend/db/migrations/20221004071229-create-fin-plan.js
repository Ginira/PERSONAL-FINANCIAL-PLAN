'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.TEXT
      },
      age: {
        type: Sequelize.INTEGER
      },
      goal_age: {
        type: Sequelize.INTEGER
      },
      cash_per_mouth_min: {
        type: Sequelize.INTEGER
      },
      start_capital: {
        type: Sequelize.INTEGER
      },
      cash_per_mouth_max: {
        type: Sequelize.INTEGER
      },
      cash_per_mouth: {
        type: Sequelize.INTEGER
      },
      finish_age_max: {
        type: Sequelize.INTEGER
      },
      finish_age_min: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
    await queryInterface.createTable('Fin_plans', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Fin_plans');
  }
};