const home = {
  async render() {
    return `
    <div class="container-xxl bg-white p-0">
    <!-- Navbar & Hero Start -->
    <nav-bar></nav-bar>
    <he-ro></he-ro>


    <!-- Feature Start -->
    <con-tent></con-tent>
    <!-- Feature End -->

    <!-- Facts Start -->
    <div class="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 px-lg-5">
            <div class="row g-4">
            </div>
        </div>
    </div>
    <!-- Facts End -->

    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container py-5 px-lg-5">
        <div class="wow fadeInUp" data-wow-delay="0.1s">
                        <p class="section-title text-secondary justify-content-center"><span></span>Our Services<span></span></p>
                        <h1 class="text-center mb-5">Yang Kami Berikan</h1>
                    </div>
            <div class="row g-4">
    <div class="col-md-4 wow fadeInUp mb-3" data-wow-delay="0.1s">
            <div class="service-item d-flex flex-column text-center rounded">
            <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="../images/logo/Fasilitas.jpg" alt="School Image" height="230">
            <h5 class="mb-3 mt-3">Fasilitas</h5>
            <p class="m-0">Fasilitas Sekolah merupakan berbagai macam sarana dan prasarana yang diberikan oleh sekolah yang dapat dimanfaatkan secara baik oleh siswa/i untuk mengembangkan minat dan bakatnya, selain itu juga fasilitas sekolah juga merupakan sesuatu hal yang dapat digunakan sebagai sarana untuk mengembangkan prestasi siswa.</p>
        </div>
     </div>
    <div class="col-md-4 wow fadeInUp mb-3" data-wow-delay="0.1s">
            <div class="service-item d-flex flex-column text-center rounded">
            <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="../images/logo/Kegiatan.jpg" alt="School Image" height="230">
            <h5 class="mb-3 mt-3">Kegiatan</h5>
            <p class="m-0">Kegiatan utama di lembaga ini adalah penyelenggaraan proses belajar dan mengajar, di ruang kelas maupun luar ruang kelas. Bentuk pelaksanaannya berupa kegiatan intrakurikuler dan ekstrakurikuler. Kegiatan intrakurikuler merupakan kegiatan belajar tatap muka dalam alokasi waktu yang sudah diatur dalam struktur dan muatan kurikulum. Kegiatan ekstrakurikuler merupakan kegiatan penunjang pembelajaran yang dilaksanakan di luar jam tatap muka.</p>
        </div>
     </div>
    <div class="col-md-4 wow fadeInUp mb-3" data-wow-delay="0.1s">
            <div class="service-item d-flex flex-column text-center rounded">
            <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="../images/logo/Prestasi.jpg" alt="School Image" height="230">
            <h5 class="mb-3 mt-3">Prestasi</h5>
            <p class="m-0">Prestasi Belajar Siswa tidak  dapat  dipisahkan  dari  kegiatan  belajar, karena  belajar  merupakan  suatu  proses,  sedangkan  prestasi  belajar adalah  hasil  dari  proses  pembelajaran  tersebut.  Bagi  seorang  anak belajar  merupakan  suatu  kewajiban.  Berhasil  atau  tidaknya  seorang anak dalam pendidikan  tergantung  pada  proses  belajar  yang  dialami oleh anak tersebut.</p>
        </div>
     </div>
        </div>
    </div>
    <!-- Service End -->

    <!-- Footer Start -->
        <foo-ter></foo-ter>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-secondary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</div>
<!-- JavaScript Libraries -->
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/isotope/isotope.pkgd.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
    
        <!-- Template Javascript -->
        <script src="js/main.js"></script>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default home;
