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
       description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
       address: 'Jl. Belibis Terusan No.16, RT.7/RW.2, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480',
       logo: 'logo.png',
       logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
       email: 'info@sman16jkt.sch.id',
       image: 'hero_1.jpg',
       imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
       noTelp: '021-5320137',
       isActive: true
      },
      {
        name: 'Sman 17 Jakarta',
        slug: 'sman-17-jakarta',
        description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
        address: 'Jl. Mangga Besar IV/I No. 27 Tamansari - Jakarta Barat',
        logo: 'logo.png',
        logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
        email: 'info@sman17jkt.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
        noTelp: '0216392046',
        isActive: true
       },
      {
        name: 'Sman 19 Jakarta',
        slug: 'sman-19-jakarta',
        description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
        address: '10, Jl. Perniagaan Raya No.31, RW.1, Tambora, Kec. Tambora, Kota Jakarta Barat, Aceh 11220',
        logo: 'logo.png',
        logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
        email: 'info@sman19jkt.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
        noTelp: '02122682063',
        isActive: true
       },
      {
        name: 'Sman 23 Jakarta',
        slug: 'sman-23-jakarta',
        description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
        address: 'Jl. Mandala Utara, Tomang, Jakarta Barat 11440',
        logo: 'logo.png',
        logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
        email: 'info@sman23jkt.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
        noTelp: '0215647367',
        isActive: true
       },
      {
        name: 'Sman 56 Jakarta',
        slug: 'sman-56-jakarta',
        description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
        address: 'Jl. Kamal Raya, Tegal Alur, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11820',
        logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
        email: 'info@sman56.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
        noTelp: '0215550938',
        isActive: true
       },
      {
        name: 'Sman 65 Jakarta',
        slug: 'sman-65-jakarta',
        description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
        address: 'Jl. Panjang Arteri Klp. Dua Raya No.3, RT.3/RW.1, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530',
        logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
        email: 'info@sman65.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
        noTelp: '0215494745',
        isActive: true
       },
      {
        name: 'Sman 76 Jakarta',
        slug: 'sman-76-jakarta',
        description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
        address: 'Jl. Cakung Cilincing No.7, RW.7, Cakung Bar., Kec. Cakung, Kota Jakarta Timur',
        logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
        email: 'sma_negeri76_jkt@yahoo.co.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
        noTelp: '0214602500',
        isActive: true
       },
      {
        name: 'Sman 84 Jakarta',
        slug: 'sman-84-jakarta',
        description: 'SMA Negeri 2 Jakarta didirikan pada tanggal 24 Februari 1959, dengan terjadi proses pengambilalihan sekolah asing melalui kebijakan pemerintah, yaitu program nasionalisasi. Sekolah asing yang dinasionalisasi tersebut bernama Kuo Min Tang yang letaknya ada di Jalan Gajah Mada 174-175. Berdasarkan keputusan Peperda No. 232, lalu di ubah menjadi SMA PPS (Panitia Pengawasan Sekolah). SMA PPS diawasi dan dibina oleh pemerintah dari perwakilan Depdikbud Jakarta Raya, dengan kepala sekolah pertama G.S. Panjaitan serta wakil kepala sekolah merangkap sekretaris dan pengajar adalah T. Simbolon.',
        address: 'Jl. Utan Jati No.42, RT.10/RW.14, Kalideres, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11840',
        logoUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/logo/logo.png',
        email: 'info@sman84jkt.sch.id',
        image: 'hero_1.jpg',
        imageUrl: 'http://localhost:3000/images/schools/sman-2-jakarta/images/hero_1.jpg',
        noTelp: '0215402584',
        isActive: true
       },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Schools', null, {});
  }
};
