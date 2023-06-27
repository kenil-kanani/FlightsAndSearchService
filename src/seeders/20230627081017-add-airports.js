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
        cityId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bharuch Iternational Airport',
        cityId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vadodara Iternational Airport',
        cityId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bhavnagar Iternational Airport',
        cityId: 20,
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
