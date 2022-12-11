import SchoolApiResource from '../../data/schoolApiResource';
import { schoolCard } from '../templates/templateCreator';

const schools = {
  async render() {
    return `
      <nav-bar></nav-bar>
      <div class="container-xxl bg-primary hero-header">
        <div class="container px-lg-5">
            <div class="row justify-content-center">
          <h1 class="text-white animated slideInDown text-center">Temukan Informasi Sekolah di seluruh Jakarta</h1><br><br><br><br><br>
                <div class="col-md-6">
                  <form action="" id="searchForm">
                    <div class="input-group mb-3">
                      <input type="search" class="form-control" placeholder="Cari Sekolah..." aria-label="Cari sekolah..." name="search" id="searchInput">
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

      <!-- Footer Start -->
      <foo-ter></foo-ter>
  <!-- Footer End -->
  `;
  },

  async afterRender() {
    try {
      const listSchools = await SchoolApiResource.getALlSchools();
      const schoolsContainer = document.querySelector('#listSchools');
      const searchForm = document.querySelector('#searchForm');
      const searchInput = document.querySelector('#searchInput');

      let cards = '';
      listSchools.forEach((school) => {
        cards += schoolCard(school);
      });

      schoolsContainer.innerHTML = cards;

      searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const searchSchools = await SchoolApiResource.searchSchools(searchInput.value);

        let schoolCards = '';
        searchSchools.forEach((school) => {
          schoolCards += schoolCard(school);
        });

        schoolsContainer.innerHTML = schoolCards;
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default schools;
