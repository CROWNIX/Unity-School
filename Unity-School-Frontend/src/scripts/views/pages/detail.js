import SchoolApiResource from '../../data/schoolApiResource';
import UrlParser from '../../routes/urlParser';

const detail = {
  async render() {
    return `
    <div class="container">
        <div class="row justify-content-center pt-3">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column text-center rounded">
                        <div class="flex-shrink-0">
                        </div>
                        <h1 class="mb-3">Fasilitas</h1>
                        <img src="./img/hero_1.jpg" alt=""
                        class="img-thumbnail">
                    </div>
                            
                    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const school = await SchoolApiResource.getSchoolById(url.id);
    console.log(school);
  },
};

export default detail;
