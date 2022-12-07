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
     {
      schoolId: 2,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 2,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 3,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 3,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 4,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 4,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 5,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 5,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 6,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 6,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 7,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 7,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 8,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 8,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 9,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 9,
      name: 'Lab',
      total: 2,
      image: 'facility_2',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_2.jpg'
    },
    {
      schoolId: 10,
      name: 'Kelas',
      total: 2,
      image: 'facility_1',
      imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/facilities/facility_1.jpg'
    },
     {
      schoolId: 10,
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
