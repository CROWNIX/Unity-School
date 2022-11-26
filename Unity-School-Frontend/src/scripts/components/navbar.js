class NavbarComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-xxl position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="d-flex navbar-brand p-0">
                    <img class="mr-5" src="../images/logo/school.png" alt="Logo">
                        <h1 class="m-0">Unity.School</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav mx-auto py-0">
                            <a href="/#home" class="nav-item nav-link active">Home</a>
                            <a href="/#profile" class="nav-item nav-link">Profile</a>
                            <a href="/#fasilitas" class="nav-item nav-link">Fasilitas</a>
                            <a href="/#berita" class="nav-item nav-link">Berita</a>
                            <a href="/#karya" class="nav-item nav-link">Karya</a>
                            <a href="/#gallery" class="nav-item nav-link">Gallery</a>
                            <a href="/#kontak" class="nav-item nav-link">Kontak</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0">
                                    <a href="team.html" class="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <a href="" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
                    </div>
                </nav>`;
  }
}

customElements.define('nav-bar', NavbarComponents);
