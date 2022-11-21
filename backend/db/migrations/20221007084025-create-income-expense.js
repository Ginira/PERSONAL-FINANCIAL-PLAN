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
      fin_plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fin_plans',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      avg_mouth_income: {
        type: Sequelize.INTEGER
      },
      avg_mouth_expenses: {
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
    await queryInterface.createTable('Income_expenses', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Income_expenses');
  }
};