class NavbarComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-xxl position-relative p-0">
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
    <a href="" class="navbar-brand p-0 d-flex">
    <img class="img-fluid me-2" src="../images/logo/school.png" alt="Logo" height="50" width="50">
        <h1 class="m-0">UnitySchool</h1>  
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto py-0">
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <a href="/#/schools" class="nav-item nav-link">Sekolah</a>
        <a href="/#/contact" class="nav-item nav-link">Contact</a>
        </div>
        <a href="/#/home" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
    </div>
  </nav>`;
  }
}

customElements.define('nav-bar', NavbarComponents);
