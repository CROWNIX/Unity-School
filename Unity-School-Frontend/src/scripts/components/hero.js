class HeroComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container-xxl bg-primary hero-header">
                    <div class="container px-lg-5">
                        <div class="row g-5 align-items-end">
                            <div class="col-lg-6 text-center text-lg-start">
                                <div class="d-flex">
                                  <h1 class="text-white mb-4 animated slideInDown title">Unity school <span class="auto-type text-warning"></span></h1>
                                </div>
                                <h2 class="text-white pb-3 animated slideInDown">Penyedia informasi sekolah yang berkualitas, karena masa depan pembelajaran yang lebih baik dimulai di sini!</h2>
                                <a href="#content-2" class="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Selengkapnya</a>
                            </div>
                            <div class="col-lg-6 text-center text-lg-start">
                                <img class="img-fluid animated zoomIn" src="../img/hero.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define('he-ro', HeroComponents);
