'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/products.json", "utf-8")).map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
     })
     return queryInterface.bulkInsert("Products", data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

   down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
