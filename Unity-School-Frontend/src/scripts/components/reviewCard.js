class ReviewCardComponents extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="bg-white px-2 pt-2   rounded col-md-9 mb-2">
        <span class="fw-bold">${this._review.username}</span>
        <p>${this._review.message}</p>
        </div>`;
  }
}

customElements.define('review-card', ReviewCardComponents);
