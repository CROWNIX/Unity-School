'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('facilities', [
      {
       schoolId: 1,
       name: 'Kelas',
       total: 2,
       image: 'facility_1',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
     },
      {
       schoolId: 1,
       name: 'Lab',
       total: 2,
       image: 'facility_2',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('facilities', null, {});
  }
};
