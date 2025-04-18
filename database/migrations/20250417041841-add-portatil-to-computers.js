'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Computers', 'portatil', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Computers', 'portatil');
  }
};
