'use strict';
const fs = require('fs');
const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const data = JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).map(el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()
    el.password = hashPassword(el.password)
    return el
   })
   return queryInterface.bulkInsert("Users", data, {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete("Users", null, {})
  }
};
