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
                      <input type="search" class="form-control invalid" placeholder="Cari Sekolah..." aria-label="Cari sekolah..." name="search" id="searchInput">
                      <button class="btn btn-warning" type="submit" id="searchButton">Search</button>
                    </div> 
                    <span class="text-white d-none" id="popupEmpty">Sekolah tidak ditemukan!</span>
                  </form> 
                </div>
            </div>
        </div>
      </div>
      <main>
        <div class="container">
          <h2 class="text-center mt-5 mb-5 section-title text-secondary justify-content-center"><span></span>Daftar Sekolah<span></span></h2>
          <h3 class="text-center mt-5 d-none" id="emptySchools">Sekolah tidak ditemukan</h3>
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
      const popupEmpty = document.querySelector('#popupEmpty');
      const emptySchools = document.querySelector('#emptySchools');
      console.log(popupEmpty);
      console.log(emptySchools);

      let cards = '';
      listSchools.forEach((school) => {
        cards += schoolCard(school);
      });

      schoolsContainer.innerHTML = cards;

      searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const searchSchools = await SchoolApiResource.searchSchools(searchInput.value);

        if (!searchSchools.length) {
          popupEmpty.classList.remove('d-none');
          emptySchools.classList.remove('d-none');
          popupEmpty.classList.add('d-block');
          emptySchools.classList.add('d-block');
        } else {
          popupEmpty.classList.remove('d-block');
          emptySchools.classList.remove('d-block');
          popupEmpty.classList.add('d-none');
          emptySchools.classList.add('d-none');
        }

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
