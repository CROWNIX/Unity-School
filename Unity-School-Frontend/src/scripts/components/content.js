class ContentComponents extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="content-2" class="content-2">
    <div class="container mt-5">
      <div class="row" tabindex="0">
      <div class="col-lg-6">
            <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="../images/logo/schoolUnity.png">
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <h1 class=" font-weight-bold mb-4 h1-beranda">Apa sih itu UnitySchool?</h1>
          <p class="container">Di Jakarta terdapat 494 sekolah SMA negeri maupun swasta (Kemdikbud, 2022). Sebelum dilaksanakannya PPDB Jakarta bulan Juli lalu. Banyak orang tua mencari informasi sekolah-sekolah yang ada di Jakarta. Namun para orang tua seringkali kebingungan mencari informasi sekolah tersebut.  Salah satu faktornya adalah jika mereka ingin mencari informasi lebih dari satu sekolah, mereka harus berpindah-pindah website. sayangnya banyak calon siswa yang menyesal ketika sudah masuk sekolah tersebut karena sering terjadi pembullyan, dll. Oleh karena itu dibutuhkan sebuah sistem yang menggabungkan semua informasi sekolah SMA di Jakarta dan menampilkan review sekolah tersebut dari para alumni, warga sekitar, dll untuk memberikan ulasan mereka.</p>
        </div>
      </div>
    </div>
  </section>`;
  }
}

customElements.define('con-tent', ContentComponents);
