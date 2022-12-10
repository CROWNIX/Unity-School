const contact = {
  async render() {
    return `
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
    <a href="" class="navbar-brand p-0 d-flex">
    <img class="img-fluid me-2" src="../images/logo/school.png" alt="Logo" height="50" width="50">
        <h1 class="m-0">UnitySchool</h1>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="fa fa-bars"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav mx-auto py-0">
      <a href="/#/home" class="nav-item nav-link active">Home</a>
      <a href="/#/schools" class="nav-item nav-link">Sekolah</a>
      <a href="/#/contact" class="nav-item nav-link">Contact</a>
      </div>
      <a href="/#/home" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
  </div>
</nav>
<!-- Navbar & Hero End -->
      <header class="container-xxl position-relative p-0">
          <div class="container-xxl py-5 bg-primary hero-header">
              <div class="container my-5 py-5 px-lg-5">
                  <div class="row py-5">
                      <div class="col-12 text-center">
                          <h1 class="text-white animated slideInDown">Contact My Team</h1>
                          <input type="hidden" class="auto-type" value="Bikin Website">
                          <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb justify-content-center">
                                  <li class="breadcrumb-item"><a class="text-white" <a href="/#/home">Home</a>
                                  </li>
                                  <li class="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </header>
      <!-- end nav -->

      <!-- Team Start -->
      <main class="container-xxl">
          <div class="container px-lg-5">
              <div class="wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                  <h1 class="text-center mb-5">Our Team</h1>
              </div>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center">
    <div class="wow fadeInUp" style="cursor: pointer; visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" data-wow-delay="0.1s">
    <div class="shadow hover-scale-1 team-item bg-light rounded mb-sm-3 mb-3">
        <div class="text-center border-bottom p-4">
            <img class=" rounded-circle mb-4" src="https://jasanya.tech/storage/imgTeam/bangRahmat.jpg" alt="" style="height: 13rem; width: 12rem; object-fit:cover; ">
            <h6 style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Rahmat Fauzi Widianto</h6>
            <p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Full Stack</p>
        </div>
        <div class="d-flex justify-content-center p-4">
            <div class="">
                <a class="btn shadow btn-square mx-1 bg-dark" href="https://github.com/CROWNIX/" target="_blank"><i class="fab fa-github text-white"></i></a>
            </div>
            <div class="">
              <a class="btn shadow btn-square mx-1 bg-info" href="https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2" target="_blank"><i class="fab fa-linkedin-in text-white"></i></a>
          </div>
            <div class="d-none">
                <a class="btn shadow btn-square mx-1 medium-icon" href="" target="_blank"><i class="fab fa-medium-m"></i></a>
            </div>
        </div>
    </div>
</div>
<div class="wow fadeInUp" style="cursor: pointer; visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" data-wow-delay="0.1s">
  <div class="shadow hover-scale-1 team-item bg-light rounded mb-sm-3 mb-3">
      <div class="text-center border-bottom p-4">
          <img class=" rounded-circle mb-4" src="https://jasanya.tech/storage/imgTeam/bangWildan.jpeg" alt="" style="height: 13rem; width: 12rem; object-fit:cover; ">
          <h6 style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Wildan B Surtanik</h6>
          <p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Front End</p>
      </div>
      <div class="d-flex justify-content-center p-4">
          <div class="">
              <a class="btn shadow btn-square mx-1 bg-dark" href="https://github.com/wildanbeckham/" target="_blank"><i class="fab fa-github text-white"></i></a>
          </div>
          <div class="">
              <a class="btn shadow btn-square mx-1 bg-info" href="https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2" target="_blank"><i class="fab fa-linkedin-in text-white"></i></a>
          </div>
          <div class="d-none">
              <a class="btn shadow btn-square mx-1 medium-icon" href="" target="_blank"><i class="fab fa-medium-m"></i></a>
          </div>
      </div>
  </div>
</div>
<div class="wow fadeInUp" style="cursor: pointer; visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" data-wow-delay="0.1s">
  <div class="shadow hover-scale-1 team-item bg-light rounded mb-sm-3 mb-3">
      <div class="text-center border-bottom p-4">
          <img class=" rounded-circle mb-4" src="https://jasanya.tech/storage/imgTeam/bangWildan.jpeg" alt="" style="height: 13rem; width: 12rem; object-fit:cover; ">
          <h6 style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Wildan B Surtanik</h6>
          <p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Front End</p>
      </div>
      <div class="d-flex justify-content-center p-4">
          <div class="">
              <a class="btn shadow btn-square mx-1 bg-dark" href="https://github.com/wildanbeckham/" target="_blank"><i class="fab fa-github text-white"></i></a>
          </div>
          <div class="">
              <a class="btn shadow btn-square mx-1 bg-info" href="https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2" target="_blank"><i class="fab fa-linkedin-in text-white"></i></a>
          </div>
          <div class="d-none">
              <a class="btn shadow btn-square mx-1 medium-icon" href="" target="_blank"><i class="fab fa-medium-m"></i></a>
          </div>
      </div>
  </div>
</div>
<div class="wow fadeInUp" style="cursor: pointer; visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;" data-wow-delay="0.1s">
  <div class="shadow hover-scale-1 team-item bg-light rounded mb-sm-3 mb-3">
      <div class="text-center border-bottom p-4">
          <img class=" rounded-circle mb-4" src="https://jasanya.tech/storage/imgTeam/bangWildan.jpeg" alt="" style="height: 13rem; width: 12rem; object-fit:cover; ">
          <h6 style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Wildan B Surtanik</h6>
          <p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">Front End</p>
      </div>
      <div class="d-flex justify-content-center p-4">
          <div class="">
              <a class="btn shadow btn-square mx-1 bg-dark" href="https://github.com/wildanbeckham/" target="_blank"><i class="fab fa-github text-white"></i></a>
          </div>
          <div class="">
              <a class="btn shadow btn-square mx-1 bg-info" href="https://www.linkedin.com/in/wildan-beckham-surtanik-2b08491b2" target="_blank"><i class="fab fa-linkedin-in text-white"></i></a>
          </div>
          <div class="d-none">
              <a class="btn shadow btn-square mx-1 medium-icon" href="" target="_blank"><i class="fab fa-medium-m"></i></a>
          </div>
      </div>
  </div>
</div>
      </main>
      <!-- Team End -->

      
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

export default contact;
