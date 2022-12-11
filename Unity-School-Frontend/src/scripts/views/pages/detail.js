import SchoolApiResource from '../../data/schoolApiResource';
import UrlParser from '../../routes/urlParser';
import * as templateCreator from '../templates/templateCreator';

const detail = {
  async render() {
    return `
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
    <a href="" class="navbar-brand p-0 d-flex">
    <img class="img-fluid me-2" src="../images/logo/school.png" alt="Logo" height="50" width="50">
        <h1 class="m-0">UnitySchool</h1>  
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto py-0">
        <a href="/#/home" class="nav-item nav-link active">Home</a>
        <a href="/#/schools" class="nav-item nav-link">Sekolah</a>
        <a href="/#/contact" class="nav-item nav-link">Contact</a>
        </div>
        <a href="/#/home" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
    </div>
  </nav>
<div>
  <img src="" class="d-block w-100" alt="..." height="500" id="heroImage">
</div>
<main id="detailContent">
    
</main>
<div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
<div class="container py-5 px-lg-5">
    <div class="row g-5">
        <div class="col-md-6">
            <p class="section-title text-white h5 mb-4">Alamat<span></span></p>
            <p><i class="fa fa-map-marker-alt me-3"></i> <span  id="address"></span></p>
            <p><i class="fa fa-phone-alt me-3"></i><span id="noTelp"></span></p>
            <p><i class="fa fa-envelope me-3"></i><span id="email"></span></p>
        </div>
    </div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script src="lib/wow/wow.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/waypoints/waypoints.min.js"></script>
<script src="lib/counterup/counterup.min.js"></script>
<script src="lib/isotope/isotope.pkgd.min.js"></script>
<script src="lib/lightbox/js/lightbox.min.js"></script>
      `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const schoolId = url.id;
      const school = await SchoolApiResource.getSchoolById(schoolId);
      const schoolContainer = document.querySelector('#detailContent');
      const heroImage = document.querySelector('#heroImage');
      const address = document.querySelector('#address');
      const noTelp = document.querySelector('#noTelp');
      const email = document.querySelector('#email');

      heroImage.src = school.imageUrl;
      address.textContent = school.address;
      noTelp.textContent = school.noTelp;
      email.textContent = school.email;

      schoolContainer.innerHTML = templateCreator.schoolDetail(school);

      this.renderActivities(school);
      this.renderAchievments(school);
      this.renderFacilities(school);
      this.rederReviews(school);


      const formReview = document.querySelector('#formReview');
      const nameInput = document.querySelector('#nameInput');
      const messageInput = document.querySelector('#messageInput');
      schoolContainer.innerHTML = templateCreator.schoolDetail(school);


      formReview.addEventListener('submit', async (e) => {
        e.preventDefault();
        const review = {
          schoolId,
          username: nameInput.value,
          message: messageInput.value,
        };

        await SchoolApiResource.createComment(review);

        const reviewContainer = document.querySelector('#reviews');

        const reviewCard = document.createElement('review-card');
        reviewCard.review = review;
        reviewContainer.appendChild(reviewCard);

        nameInput.value = '';
        messageInput.value = '';
      });
    } catch (error) {
      console.log(error);
    }
  },

  renderActivities({ activities }) {
    const activityContainer = document.querySelector('#activities');
    activityContainer.innerHTML = templateCreator.schoolActivities(activities);
  },

  renderAchievments({ achievments }) {
    const achievmentContainer = document.querySelector('#achievments');
    achievmentContainer.innerHTML = templateCreator.schoolAchievments(achievments);
  },

  renderFacilities({ facilities }) {
    const facilityContainer = document.querySelector('#facilities');
    facilityContainer.innerHTML = templateCreator.schoolFacilities(facilities);
  },

  rederReviews({ comments }) {
    const reviewContainer = document.querySelector('#reviews');

    if (comments.length) {
      reviewContainer.innerHTML = schoolReviews(comments);
    } else {
      reviewContainer.innerHTML = emptyReviews();
    }
  },
};

export default detail;
