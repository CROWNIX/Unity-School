'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('activities', [
      {
       schoolId: 1,
       name: 'Rohis',
       image: 'activity_1.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
     },
      {
       schoolId: 1,
       name: 'Tari',
       image: 'activity_2.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
     },
      {
       schoolId: 1,
       name: 'Marching band',
       image: 'activity_3.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
     },
      {
       schoolId: 1,
       name: 'Pramuka',
       image: 'activity_4.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
     },
      {
       schoolId: 1,
       name: 'Pencak silat',
       image: 'activity_5.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('activities', null, {});
  }
};
