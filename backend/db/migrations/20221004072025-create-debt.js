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
      title: {
        type: Sequelize.TEXT
      },
      sum_debt: {
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
    await queryInterface.createTable('Debts', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Debts');
  }
};