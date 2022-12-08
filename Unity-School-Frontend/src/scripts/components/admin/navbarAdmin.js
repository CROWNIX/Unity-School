class NavbarAdminComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Dashboard</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/#/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Schools</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define('navbar-admin', NavbarAdminComponents);
