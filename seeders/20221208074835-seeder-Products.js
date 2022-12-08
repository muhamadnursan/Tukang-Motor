'use strict';
const fs = require("fs")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let dataProduct = JSON.parse(fs.readFileSync("./data/products.json", "utf-8")).map(el=>{
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert("Products", dataProduct, {})
    /**
     * 
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
