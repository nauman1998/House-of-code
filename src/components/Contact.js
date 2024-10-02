import React from 'react';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted!');
  };

  return (
    <>
      <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
  <h2>Contact</h2>
  <p>Contact Us</p>
</div>

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
    <iframe 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.596342257893!2d70.3001927!3d28.4335638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375bfd197675c5%3A0xaca88599836da5bd!2sHouse%20of%20Code!5e0!3m2!1sen!2sus!4v1696184606767!5m2!1sen!2sus" 
       allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: 0, width: '100%', height: '300px' }}
      title="Google Map"
    ></iframe>
  </div>

  <div className="row gy-4">

    <div className="col-lg-4">
      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>Opposite Abbasia Sports Complex, Canal Road</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+92 300 0252210</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
        <i className="bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>Hoc@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="col-lg-8">
      <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          <div className="col-md-6">
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="Your Name" 
              required
            />
          </div>

          <div className="col-md-6">
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              placeholder="Your Email" 
              required
            />
          </div>

          <div className="col-md-12">
            <input 
              type="text" 
              className="form-control" 
              name="subject" 
              placeholder="Subject" 
              required
            />
          </div>

          <div className="col-md-12">
            <textarea 
              className="form-control" 
              name="message" 
              rows="6" 
              placeholder="Message" 
              required
            ></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>

  </div>

</div>


      </section>
    </>
  );
};

export default Contact;
