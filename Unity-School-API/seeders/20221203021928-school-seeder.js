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
       imageUrl: 'http://localhost:3000/images/schools/sman-33-jakarta/images/hero_1.jpg',
       noTelp: '0216191041',
       isActive: true
      },
      {
       name: 'Sman 2 Jakarta',
       slug: 'sman-2-jakarta',
       description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
       address: 'Jalan Gajah Mada No. 175 Keagungan Tamansari RT.1/RW.5 RT.1 4 5, RT.1/RW.5, Keagungan, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11130',
       logo: 'logo.png',
       logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
       email: 'info@sman2jkt.sch.id',
       image: 'hero_1.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
       noTelp: '021-6294318',
       isActive: true
      },
      {
       name: 'Sman 16 Jakarta',
       slug: 'sman-16-jakarta',
       description: 'SMA Negeri 16 Jakarta, merupakan salah satu Sekolah Menengah Atas Negeri yang ada di Provinsi DKI Jakarta, Indonesia. Sama dengan SMA pada umumnya di Indonesia masa pendidikan sekolah di SMAN 16 Jakarta ditempuh dalam waktu tiga tahun pelajaran, mulai dari Kelas X sampai Kelas XII.',
       address: 'Jl. Belibis Terusan No.16, RT.7/RW.2, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480',
       logo: 'logo.jpg',
       logoUrl: 'http://localhost:3000/images/schools/sman-16-jakarta/logo/logo.jpg',
       email: 'info@sman16jkt.sch.id',
       image: 'hero_1.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-16-jakarta/images/hero_1.jpg',
       noTelp: '021-5320137',
       isActive: true
      },
      {
        name: 'Sman 17 Jakarta',
        slug: 'sman-17-jakarta',
        description: 'SMA Negeri 17 Jakarta, Merupakan salah satu sekolah yang ada di Provinsi DKI Jakarta. Sama dengan SMA pada umumnya, masa pendidikan sekolah di SMAN 17 Jakarta ditempuh dalam waktu tiga tahun pelajaran, mulai dari Kelas X sampai Kelas XII.',
        address: 'Jl. Mangga Besar IV/I No. 27 Tamansari - Jakarta Barat',
        logo: 'logo.png',
        logoUrl: 'http://localhost:3000/images/schools/sman-17-jakarta/logo/logo.png',
        email: 'info@sman17jkt.sch.id',
        image: 'hero_1.png',
        imageUrl: 'http://localhost:3000/images/schools/sman-17-jakarta/images/hero_1.png',
        noTelp: '0216392046',
        isActive: true
       },
      {
        name: 'Sman 19 Jakarta',
        slug: 'sman-19-jakarta',
        description: 'Sekolah Menengah Atas Negeri 19 Jakarta adalah Sekolah Menengah Atas Negeri yang berada di bilangan Tambora, Jakarta Barat.',
        address: '10, Jl. Perniagaan Raya No.31, RW.1, Tambora, Kec. Tambora, Kota Jakarta Barat, Aceh 11220',
        logo: 'logo.png',
        logoUrl: 'http://localhost:3000/images/schools/sman-19-jakarta/logo/logo.png',
        email: 'info@sman19jkt.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-19-jakarta/images/hero_1.jpg',
        noTelp: '02122682063',
        isActive: true
       },
      {
        name: 'Sman 23 Jakarta',
        slug: 'sman-23-jakarta',
        description: 'Sekolah Menengah Atas Negeri 19 Jakarta adalah Sekolah Menengah Atas Negeri yang berada di bilangan Tambora, Jakarta Barat.',
        address: 'Jl. Mandala Utara, Tomang, Jakarta Barat 11440',
        logo: 'logo.jpg',
        logoUrl: 'http://localhost:3000/images/schools/sman-23-jakarta/logo/logo.jpg',
        email: 'info@sman23jkt.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-23-jakarta/images/hero_1.jpg',
        noTelp: '0215647367',
        isActive: true
       },
      {
        name: 'Sman 56 Jakarta',
        slug: 'sman-56-jakarta',
        description: 'SMA Negeri 56 didirikan pertama kali pada tahun 1979. Pada saat itu belum bernama SMA Negeri 56 tapi masih merupakan fillal/kelas jauh dari SMA Negeri 2 (yang beralamat di jalan Gajah Mada) guru-guru yang mengajar pada saat itu merupakan guru SMA Negeri 2 dan SMA Negeri 33 Pada tanggal 17 Juli tahun 1981 SMA Negeri 56 resmi berdiri sendiri, dengan nama SMA Negeri 56 Jakarta, alamat jalan Kamal Raya Kelurahan Tegal Alur, Kecamatan Kalideres, Kotamadya Jakarta Barat.',
        address: 'Jl. Kamal Raya, Tegal Alur, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11820',
        logo: 'logo.jpg',
        logoUrl: 'http://localhost:3000/images/schools/sman-56-jakarta/logo/logo.jpg',
        email: 'info@sman56.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-56-jakarta/images/hero_1.jpg',
        noTelp: '0215550938',
        isActive: true
       },
      {
        name: 'Sman 65 Jakarta',
        slug: 'sman-65-jakarta',
        description: 'SMA Negeri 65 Jakarta adalah Sekolah Menengah Atas Negeri yang berada di bilangan Kelapa Dua, Kebon Jeruk, Jakarta Barat. Awal berdiri SMA Negeri 65 Jakarta bernama sekolah kelas jauh SMPP 35, sekarang SMPP 35 menjadi SMA Negeri 78 Jakarta dan yang menjabat wakil kepala sekolah SMPP 35 saat itu adalah Dra.',
        address: 'Jl. Panjang Arteri Klp. Dua Raya No.3, RT.3/RW.1, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530',
        logo: 'logo.jpg',
        logoUrl: 'http://localhost:3000/images/schools/sman-65-jakarta/logo/logo.jpg',
        email: 'info@sman65.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-65-jakarta/images/hero_1.jpg',
        noTelp: '0215494745',
        isActive: true
       },
      {
        name: 'Sman 76 Jakarta',
        slug: 'sman-76-jakarta',
        description: 'SMA Negeri 76 Jakarta berdiri sejak 31 Agustus 1984, merupakan sekolah menengah atas tertua diwilayah kecamatan Cakung. Sebelumnya dikenal dengan nama SMA Kampung Baru. Pada saat itu menempati gedung yang seharusnya untuk Sekolah Dasar dan telah dibangun sebelumnya yaitu tahun 1982 (SD Inpres).',
        address: 'Jl. Cakung Cilincing No.7, RW.7, Cakung Bar., Kec. Cakung, Kota Jakarta Timur',
        logo: 'logo.jpg',
        logoUrl: 'http://localhost:3000/images/schools/sman-76-jakarta/logo/logo.jpg',
        email: 'sma_negeri76_jkt@yahoo.co.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-76-jakarta/images/hero_1.jpg',
        noTelp: '0214602500',
        isActive: true
       },
      {
        name: 'Sman 84 Jakarta',
        slug: 'sman-84-jakarta',
        description: 'SMAN 84 JAKARTA adalah salah satu satuan pendidikan dengan jenjang SMA di Kalideres, Kec. Kali Deres, Kota Jakarta Barat, Dki Jakarta. Sama dengan SMA pada umumnya, masa pendidikan sekolah di SMAN 17 Jakarta ditempuh dalam waktu tiga tahun pelajaran, mulai dari Kelas X sampai Kelas XII.',
        address: 'Jl. Utan Jati No.42, RT.10/RW.14, Kalideres, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11840',
        logo: 'logo.jpg',
        logoUrl: 'http://localhost:3000/images/schools/sman-84-jakarta/logo/logo.jpg',
        email: 'info@sman84jkt.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-84-jakarta/images/hero_1.jpg',
        noTelp: '0215402584',
        isActive: true
       },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Schools', null, {});
  }
};
