const restaurantCard = ({
  imageUrl, name, description, id,
}) => {
  let newDescription = description;

  if (description.length > 98) {
    newDescription = newDescription.substring(0, 110);
  }

  return `<div class="col-md-4 mb-3">
    <div class="card" style="width: 100%;">
      <img class="lazyload card-img-top" src="./img/skeleton/Loading_icon.gif" data-src="${imageUrl}" alt="School Image">
      
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${newDescription}...</p>
        <a href="/#/schools/${id}" class="btn btn-primary">Detail</a>
      </div>
    </div>
  </div>`;
};

const schoolDetail = ({
  logoUrl, description, name, address, noTelp, imageUrl,
}) => `<div class="container py-5">
  <h2 class="text-center mt-5 mb-5 section-title text-secondary justify-content-center"><span></span>Tentang Kami<span></span></h2>
  <section class="row pb-5">
    <div class="col-md-6 d-md-flex justify-content-center align-items-center d-none">
      <img src="${logoUrl}" class="d-block" alt="Logo" height="250" width="250">
    </div>
    <div class="col-md-6">
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
<!-- Facility End -->`;

const schoolActivities = (activities) => {
  let activitiesCard = '';

  activities.forEach((activity) => {
    activitiesCard += `<div class="col-md-4 mb-3">
    <div class="card rounded" style="width: 100%;">
      <span class="text-white position-absolute px-3 py-2 w-100" style="background-color: rgba(0, 0, 0, 0.8)">${activity.name}</span>
      <img src="${activity.imageUrl}" class="card-img-top" alt="Kegiatan sekolah" height="230">
    </div>
  </div>`;
  });

  return activitiesCard;
};

const schoolAchievments = (achievments) => {
  let achievmentsCard = '';

  achievments.forEach((achievment) => {
    achievmentsCard += `<div class="col-md-4 mb-3">
    <div class="card rounded" style="width: 100%;">
      <span class="text-white position-absolute px-3 py-2 w-100 bottom-0" style="background-color: rgba(0, 0, 0, 0.8)">${achievment.name}<br>${achievment.level}</span>
      <img src="${achievment.imageUrl}" class="card-img-top" alt="Prestasi sekolah" height="230">
    </div>
  </div>`;
  });

  return achievmentsCard;
};

const schoolFacilities = (facilities) => {
  let facilitiesCard = '';

  facilities.forEach((facility) => {
    facilitiesCard += `<div class="col-md-4 mb-3">
    <div class="card" style="width: 100%">
    <img src="${facility.imageUrl}" class="card-img-top" alt="Fasilitas sekolah">
      <div class="card-body">
        <p class="card-text">Total : ${facility.total}</p>
      </div>
    </div>
  </div>`;
  });

  return facilitiesCard;
};

export {
  restaurantCard, schoolDetail, schoolActivities, schoolAchievments, schoolFacilities,
};
