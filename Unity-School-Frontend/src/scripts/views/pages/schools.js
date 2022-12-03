import SchoolApiResource from '../../data/schoolApiResource';

const schools = {
  async render() {
    return `
    <div class="container-xxl bg-white p-0">
    <!-- Navbar & Hero Start -->
    <nav-bar></nav-bar>

    <div class="container-xxl bg-primary hero-header">
                    <div class="container px-lg-5">
                      <div class="row justify-content-center">
                        <div class="col-md-6">
                          <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Search..." aria-label="Search school" aria-describedby="button-addon2">
                          <button class="btn btn-warning" type="search" id="button-addon2">Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    <main>
      <div class="container mt-5">
      <div class="row justify-content-center pt-3" id="listSchools">
        
      </div>
    </div>
  </main>

    <!-- Footer Start -->
        <foo-ter></foo-ter>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-secondary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</div>
    `;
  },

  async afterRender() {
    try {
      const listSchools = await SchoolApiResource.getALlSchools();
      const schoolsContainer = document.querySelector('#listSchools');

      let cards = '';
      listSchools.forEach((school) => {
        cards += `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="service-item d-flex flex-column text-center rounded">
            <img src="${school.imageUrl}" alt="Gambar sekolah" class="img-thumbnail">
            <h5 class="mb-3 mt-3">${school.name}</h5>
            <p class="m-0">${school.description}</p>
            <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
        </div>
    </div>`;
      });

      schoolsContainer.innerHTML = cards;
    } catch (error) {
      console.log(error);
    }
  },
};

export default schools;
