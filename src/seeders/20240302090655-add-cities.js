'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Cities', [
      {
        id: 1,
        name: "Surat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Mumbai",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Delhi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Bangalore",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Hyderabad",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Chennai",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Kolkata",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Ahmedabad",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Pune",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Cities', null, {});
  }
};
