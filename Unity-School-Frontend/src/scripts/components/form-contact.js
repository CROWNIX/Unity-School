class FormContact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Contact Start -->
    <section class="container-xxl" id="contact" >
        <div class="container py-5 px-lg-5">
            <div class="wow fadeInUp" data-wow-delay="0.1s">
                {{-- <p class="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span>
                </p>
                --}}
                <h1 class="text-center mb-5">Kritik Dan Saran</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="wow fadeInUp" data-wow-delay="0.3s">
                        <form method="POST" action="{{ url('/kritikSaran') }}">
                            @csrf
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3 mb-sm-0">
                                        <input type="text" class="form-control" name="name_email" id="name"
                                            placeholder="Your Name" maxlength="35" required>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
    
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" name="email_kritik" id="email"
                                            placeholder="Your Email" maxlength="35" required>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" name="subject" id="subject"
                                            placeholder="Subject" required>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-3">
                                    <div class="form-floating">
                                        <textarea class="form-control" name="message" placeholder="Leave a message here"
                                            id="message" style="height: 150px" required></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-3">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact End -->`;
  }
}

customElements.define('form-contact', FormContact);
