'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Profiles');
  }
};