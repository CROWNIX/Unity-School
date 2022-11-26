class FormReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="formReviews">
        <h2>Form Reviews</h2>
        <form action="" class="inputReviews">
          <label>Name</label>
          <input id="name-review" type="text" maxlength="16" autocomplete="off" placeholder="Input your name" required>
          <label>Reviews</label>
          <input id="content-review" type="text" maxlength="48" placeholder="Input your reviews" required>
          <button id="submit-review" class="submit" type="submit">Submit</button>
        </form>
      </div>`;
  }
}

customElements.define('form-reviews', FormReviews);
