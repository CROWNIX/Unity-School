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
                <h1 class="text-center mb-5">What Solutions We Provide</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-search fa-2x"></i>
                        </div>
                        <h5 class="mb-3">SEO Optimization</h5>
                        <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-laptop-code fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Web Design</h5>
                        <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item d-flex flex-column text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fab fa-facebook-f fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Social Media Marketing</h5>
                        <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-mail-bulk fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Email Marketing</h5>
                        <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-thumbs-up fa-2x"></i>
                        </div>
                        <h5 class="mb-3">PPC Advertising</h5>
                        <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item d-flex flex-column text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fab fa-android fa-2x"></i>
                        </div>
                        <h5 class="mb-3">App Development</h5>
                        <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                    </div>
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
