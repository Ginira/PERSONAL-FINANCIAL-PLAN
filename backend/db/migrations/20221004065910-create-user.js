"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          is: /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          isEmail: true,
        },
      },
      avatar: {
        type: Sequelize.TEXT,
        defaultValue:
          "https://cdn.store-assets.com/s/391095/f/5163613.jpeg?width=1500",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    await queryInterface.createTable("Users", attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Users");
  },
};
