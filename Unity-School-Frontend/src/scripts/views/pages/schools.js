import SchoolApiResource from '../../data/schoolApiResource';

const schools = {
  async render() {
    return `<nav class="navbar navbar-expand-lg bg-primary navbar-dark p-2">
    <div class="container-fluid">
    <a href="" class="d-flex navbar-brand p-0 align-items-center">
    <img class="img-fluid me-2" src="../images/logo/school.png" alt="Logo" height="50" width="50">
        <h3 class="m-0 text-white">Unity School</h3>
    </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto">
          <a href="/#/home" class="nav-item nav-link active">Home</a>
          <a href="/#/schools" class="nav-item nav-link">Sekolah</a>
          <a href="/#/contact" class="nav-item nav-link">Favourite</a>
          <a href="contact.html" class="nav-item nav-link">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  
  <main>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search..." aria-label="Search school" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="search" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" id="listSchools">
        
      </div>
    </div>
  </main>
  `;
  },

  async afterRender() {
    try {
      const listSchools = await SchoolApiResource.getALlSchools();
      const schoolsContainer = document.querySelector('#listSchools');

      let cards = '';
      listSchools.forEach((school) => {
        cards += `<div class="col-md-3 mx-2">
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${school.name}</h5>
            <p class="card-text">${school.description}</p>
            <a href="#" class="btn btn-primary">Detail</a>
          </div>
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
