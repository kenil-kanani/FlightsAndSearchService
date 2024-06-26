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

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Surat Iternational Airport',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mumbai Iternational Airport',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delhi Iternational Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangalore Iternational Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hyderabad Iternational Airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai Iternational Airport',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kolkata Iternational Airport',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ahmedabad Iternational Airport',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune Iternational Airport',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
