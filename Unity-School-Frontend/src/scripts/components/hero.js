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
                                    <h1 class="text-white mb-4 animated slideInDown title">Menyediakan Informasi <span class="auto-type text-warning"></span></h1>
                                </div>
                                <p class="text-white pb-3 animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                                <a href="" class="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                                <a href="" class="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
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
