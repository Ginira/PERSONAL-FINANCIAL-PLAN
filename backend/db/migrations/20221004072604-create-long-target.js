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
      price_target: {
        type: Sequelize.INTEGER
      },
      goal_age_target: {
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
    await queryInterface.createTable('Long_targets', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Long_targets');
  }
};