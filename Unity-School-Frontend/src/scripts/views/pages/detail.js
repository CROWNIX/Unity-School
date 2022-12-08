import SchoolApiResource from '../../data/schoolApiResource';
import UrlParser from '../../routes/urlParser';
import {
  schoolDetail, schoolActivities, schoolAchievments, schoolFacilities, schoolReviews, emptyReviews,
} from '../templates/templateCreator';

const detail = {
  async render() {
    return `
    <nav class="navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-4 bg-primary text-white">
    <a href="" class="d-flex navbar-brand p-0 align-items-center">
    <img class="img-fluid me-2" src="../images/logo/school.png" alt="Logo" height="50" width="50">
        <h3 class="m-0 text-white">Unity School</h3>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto py-0 detail-nav">
            <a href="/#/home" class="nav-item nav-link active mx-1">Home</a>
            <a href="/#/schools" class="nav-item nav-link">Sekolah</a>
            <a href="/#/contact" class="nav-item nav-link">Kontak</a>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
        </div>
        <a href="" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block btn-light">Get Started</a>
    </div>
</nav>
<div>
  <img src="./img/hero_1.jpg" class="d-block w-100" alt="..." height="500">
</div>
<main id="detailContent">
    
</main>
      `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const schoolId = url.id;
      const school = await SchoolApiResource.getSchoolById(schoolId);
      const schoolContainer = document.querySelector('#detailContent');

      schoolContainer.innerHTML = schoolDetail(school);

      this.renderActivities(school);
      this.renderAchievments(school);
      this.renderFacilities(school);
      this.rederReviews(school);

      const formReview = document.querySelector('#formReview');
      const nameInput = document.querySelector('#nameInput');
      const messageInput = document.querySelector('#messageInput');

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
    activityContainer.innerHTML = schoolActivities(activities);
  },

  renderAchievments({ achievments }) {
    const achievmentContainer = document.querySelector('#achievments');
    achievmentContainer.innerHTML = schoolAchievments(achievments);
  },

  renderFacilities({ facilities }) {
    const facilityContainer = document.querySelector('#facilities');
    facilityContainer.innerHTML = schoolFacilities(facilities);
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
