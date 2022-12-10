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
              <div class="col footer-kontak">
                <h2>Kontak</h2>
                <ul>
                  <li><img src="../../public/img/telepon.png" alt="iconTelepon" width="20px"> +62 867-5340-9873</li>
                  <li><img src="8d6a012450b757d91e99ae39826b5806.png" alt="iconChat" width="15px" class=" ls-is-cached lazyloaded"> +62 867-5340-9873</li>
                </ul>
              </div>
              <div class="col footer-email">
                <h2>Email</h2>
                <ul>
                  <li><img data-src="2f3fe2b4918997ee4e09a50509ae18c4.png" alt="iconEmail" width="17px" class=" lazyloaded" src="2f3fe2b4918997ee4e09a50509ae18c4.png"> animacare15@gmail.com</li>
                </ul>
              </div>
              <div class="col footer-alamat">
                <h2>Alamat</h2>
                <p><img data-src="601d88f9037f6933ee110833973c5653.png" alt="iconMaps" width="15px" class=" lazyloaded" src="601d88f9037f6933ee110833973c5653.png">  Jl. Dipati Ukur, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
              </div>
            </div>
          </div>
          <p class="text-center mt-2 pb-2">©<span style="color: #fff; font-weight: bold;">UnitySchool</span>, 2022. All Rights Reserved</p>
      </div>
  </div>`;
  }
}

customElements.define('foo-ter', FooterComponents);
