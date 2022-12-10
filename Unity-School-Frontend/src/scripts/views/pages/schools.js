import SchoolApiResource from '../../data/schoolApiResource';
import { schoolCard } from '../templates/templateCreator';

const schools = {
  async render() {
    return `
      <nav-bar></nav-bar>
      <div class="container-xxl bg-primary hero-header">
        <div class="container px-lg-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                  <form action="">
                    <div class="input-group mb-3">
                      <input type="search" class="form-control" placeholder="Cari Sekolah..." aria-label="Cari sekolah...">
                      <button class="btn btn-warning" type="submit" id="searchButton">Search</button>
                    </div> 
                  </form> 
                </div>
            </div>
        </div>
      </div>
      <main>
        <div class="container">
          <h2 class="text-center mt-5 mb-5 section-title text-secondary justify-content-center"><span></span>Daftar Sekolah<span></span></h2>
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
        cards += schoolCard(school);
      });

      schoolsContainer.innerHTML = cards;
    } catch (error) {
      console.log(error);
    }
  },
};

export default schools;
