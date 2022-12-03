'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Schools', [
      {
       name: 'Sman 33 Jakarta',
       slug: 'sman-33-jakarta',
       description: 'Merupakan sebuah tempat untuk belajar  siswa/siswi tingkat menengah atas. Sekolah Menengah Atas  Negeri 33 Jakarta  juga merupakan sekolah dengan tingkat akreditasi A, yang dimana dinilai langsung oleh dinas pendidikan. Tidak heran jika mempunya banyak anak-anak yang berbakat karna sekolah ini merupakan salah satu sekolah terfavorit di Jakarta.',
       address: 'Jl. Kamal Raya No.54, RT.6/RW.3, Cengkareng Barat, Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730',
       logo: 'logo.png',
       logoUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/logo/logo.png',
       email: 'smanegeri33.jkt@gmail.com',
       image: 'hero_1.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/hero/hero_1.jpg',
       noTelp: '0216191041',
       isActive: true
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Schools', null, {});
  }
};
