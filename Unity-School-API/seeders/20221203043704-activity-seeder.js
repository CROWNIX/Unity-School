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
     {
      schoolId: 2,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 2,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 2,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 2,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 2,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
     {
      schoolId: 3,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 3,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 3,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 3,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 3,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
    {
      schoolId: 4,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 4,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 4,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 4,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 4,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
    {
      schoolId: 5,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 5,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 5,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 5,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 5,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
    {
      schoolId: 6,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 6,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 6,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 6,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 6,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
    {
      schoolId: 7,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 7,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 7,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 7,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 7,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
    {
      schoolId: 8,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 8,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 8,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 8,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 8,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
    {
      schoolId: 9,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 9,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 9,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 9,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 9,
      name: 'Pencak silat',
      image: 'activity_5.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_5.jpg'
    },
    {
      schoolId: 10,
      name: 'Rohis',
      image: 'activity_1.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_1.jpg'
    },
     {
      schoolId: 10,
      name: 'Tari',
      image: 'activity_2.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_2.jpg'
    },
     {
      schoolId: 10,
      name: 'Marching band',
      image: 'activity_3.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_3.jpg'
    },
     {
      schoolId: 10,
      name: 'Pramuka',
      image: 'activity_4.jpg',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/activities/activity_4.jpg'
    },
     {
      schoolId: 10,
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
