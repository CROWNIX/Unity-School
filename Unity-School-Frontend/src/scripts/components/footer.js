class FooterComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5 px-lg-5">
          <div class="container py-3">
            <div class="row grid-footer">
            <div class="col-md-6 col-lg-3">
            <p class="section-title text-white h5 mb-4">Alamat</p>
            <p><i class="fa fa-map-marker-alt me-3"></i>Jakarta, Indonesia</p>
            <p><i class="fa fa-phone-alt me-3"></i>+62 813-8109-2649</p>
            <p><i class="fa fa-envelope me-3"></i>admin@unityschool</p>
        </div>
        <div class="col-md-6 col-lg-3">
          <p class="section-title text-white h5 mb-4">Quick Link</p>
          <a href="index.html" class="nav-item nav-link active">Home</a>
          <a href="/#/schools" class="nav-item nav-link">Sekolah</a>
          <a href="/#/contact" class="nav-item nav-link">Contact</a>
       </div>
       <div class="col-md-6 col-lg-3">
                 <p class="section-title text-white h5 mb-4">Unity School Team</p>
                                      <p style="cursor:pointer;">Rahmat Fauzi Widianto </p>
                                      <p style="cursor:pointer;">Muhammad Riyadi Al Fikri </p>
                                      <p style="cursor:pointer;">Galih Qoirul Amar </p>
                                      <p style="cursor:pointer;">Riky Jhordi Sagala </p>
                              </div>
                              <div class="col-md-6 col-lg-3">
                              <p class="section-title text-white h5 mb-4">Kenali Kami Lebih Dekat</p>
                              <div class="d-flex pt-2">
                                  <a class="btn twitter-icon btn-social" href=""><i class="fab fa-twitter text-white"></i></a>
                                  <a class="btn facebook-icon btn-social" href=""><i class="fab fa-facebook-f text-white"></i></a>
                                  <a class="btn ig-icon btn-social" href=""><i class="fab fa-instagram text-white"></i></a>
                                  <a class="btn bg-info btn-social" href=""><i class="fab fa-linkedin-in text-white"></i></a><br><br><br>
                              </div>
                          </div>
         </div>
     </div> 
          <p class="text-center mt-2 pb-2">©<span style="color: #fff; font-weight: bold;">unitySchool</span>, 2022. All Rights Reserved</p>
      </div>
  </div>`;
  }
}

customElements.define('foo-ter', FooterComponents);
