'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('achievments', [
      {
        schoolId: 1,
        name: 'Juara 1 Voli',
        level: 'Se provinsi',
        image: 'achievment_1',
        imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/achievments/achievment_1.jpg'
      },
      {
        schoolId: 1,
        name: 'Juara 2 Futsal',
        level: 'Se provinsi',
        image: 'achievment_2',
        imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/achievments/achievment_2.jpg'
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('achievments', null, {});
  }
};
