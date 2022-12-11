const schoolCard = ({
  imageUrl, name, description, id,
}) => {
  let newDescription = description;

  if (description.length > 98) {
    newDescription = newDescription.substring(0, 110);
  }

  return `<div class="col-md-4 wow fadeInUp mb-3" data-wow-delay="0.1s" onclick="window.location = '/#/schools/${id}'">
      <div class="service-item d-flex flex-column text-center rounded">
        <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="${imageUrl}" alt="School Image" height="230">
        <h5 class="mb-3 mt-3">${name}</h5>
        <p class="m-0">${newDescription}...</p>
        <a class="btn btn-square" href="/#/schools/${id}"><i class="fa fa-arrow-right"></i></a>
      </div>
  </div>`;
};

const schoolDetail = ({
  logoUrl, description, name, address, noTelp, imageUrl,
}) => `<div class="container py-5">
  <h2 class="text-center mt-5 mb-5 section-title text-secondary justify-content-center"><span></span>Tentang Kami<span></span></h2>
  <section class="row pb-5">
    <div class="col-md-6 d-md-flex justify-content-center align-items-center d-none animated slideInLeft">
      <img class="lazyload d-block" src="./img/skeleton/Loading_icon.gif" data-src="${logoUrl}" alt="Logo sekolah" height="250" width="250">
    </div>
    <div class="col-md-6 animated slideInRight">
      <p>${description}</p>
    </div>
  </section>
</div>

<!-- Activity Start -->
<div class="container pb-5">
  <h2 class="text-center mt-5 section-title text-secondary justify-content-center"><span></span>Kegiatan<span></span></h2>
  <section class="row py-5 justify-content-center" id="activities">
  
  </section>
</div>
<!-- Activity End -->

<!-- Achievment Start -->
<div class="container py-5">
  <h2 class="text-center mt-5 section-title text-secondary justify-content-center"><span></span>Prestasi<span></span></h2>
  <section class="row py-5 justify-content-center" id="achievments">
    
  </section>
</div>
<!-- Achievment End -->

<!-- Facility Start -->
<div class="container py-5">
  <h2 class="text-center mt-5 section-title text-secondary justify-content-center"><span></span>Fasilitas<span></span></h2>
  <section class="row py-5 justify-content-center" id="facilities">
    
  </section>
</div>
<div class="container py-5">
  <h2 class="text-center mt-5 section-title text-secondary justify-content-center"><span></span>Review Sekolah<span></span></h2>
  <section class="row justify-content-center">
    <div class="col-md-8 border p-3 d-flex flex-column" id="reviews" style="height: 280px; overflow-y: scroll;">
 
    </div>
  </section>
 
  <section class="row justify-content-center py-5">
    <div class="col-md-8">
      <form action="" method="post" id="formReview">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="nameInput" placeholder="Masukan nama" name="name" required>
          <label for="nameInput">Nama</label>
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Masukan komentar" id="messageInput" name="message" required></textarea>
          <label for="messageInput">Komentar</label>
        </div>
        <button class="btn btn-primary" id="sendButton">Kirim</button>
      </form>
    </div>
  </section>
</div>
<!-- Facility End -->`;

const schoolActivities = (activities) => {
  let activitiesCard = '';

  activities.forEach((activity) => {
    activitiesCard += `<div class="col-md-4 mb-3 wow fadeInUp" data-wow-delay="0.1s">
    <div class="card rounded" style="width: 100%;">
      <span class="text-white position-absolute px-3 py-2 w-100" style="background-color: rgba(0, 0, 0, 0.8)">${activity.name}</span>
      <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="${activity.imageUrl}" alt="Kegiatan sekolah" height="230">
    </div>
  </div>`;
  });

  return activitiesCard;
};

const schoolAchievments = (achievments) => {
  let achievmentsCard = '';

  achievments.forEach((achievment) => {
    achievmentsCard += `<div class="col-md-4 mb-3 wow fadeInUp" data-wow-delay="0.1s">
    <div class="card rounded" style="width: 100%;">
      <span class="text-white position-absolute px-3 py-2 w-100 bottom-0" style="background-color: rgba(0, 0, 0, 0.8)">${achievment.name}<br>${achievment.level}</span>
      <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="${achievment.imageUrl}" alt="Prestasi sekolah" height="230">
    </div>
  </div>`;
  });

  return achievmentsCard;
};

const schoolFacilities = (facilities) => {
  let facilitiesCard = '';

  facilities.forEach((facility) => {
    facilitiesCard += `<div class="col-md-4 mb-3 wow fadeInUp" data-wow-delay="0.1s">
    <div class="card" style="width: 100%">
    <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="${facility.imageUrl}" alt="Fasilitas sekolah" height="230">
      <div class="card-body">
        <p class="card-text">Total : ${facility.total}</p>
      </div>
    </div>
  </div>`;
  });

  return facilitiesCard;
};

const schoolReviews = (comments) => {
  let reviewsCard = '';

  comments.forEach((comment) => {
    reviewsCard += `<div class="bg-white px-2 pt-2   rounded col-md-9 mb-2">
    <span class="fw-bold">${comment.username}</span>
    <p>${comment.message}</p>
  </div>`;
  });

  return reviewsCard;
};

const reviewCard = (name, message) => `<div class="bg-white px-2 pt-2   rounded col-md-9 mb-2">
  <span class="fw-bold">${name}</span>
  <p>${message}</p>
</div>`;

const emptyReviews = () => `<div class="d-flex justify-content-center">
  <h4>Tidak ada review</h3>
</div>`;

export {
  schoolCard, schoolDetail, schoolActivities, schoolAchievments, schoolFacilities, schoolReviews,
  emptyReviews, reviewCard,
};
