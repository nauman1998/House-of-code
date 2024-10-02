import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section dark-background">
      {/* Background image in the public folder */}
      <img src="/assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="Testimonials Background" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,  // Slides won't pause when interacted with
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}  
          className="init-swiper"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="/assets/img/testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt="Saul Goodman"
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="/assets/img/testimonials/testimonials-2.jpg"
                className="testimonial-img"
                alt="Sara Wilsson"
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="/assets/img/testimonials/testimonials-3.jpg"
                className="testimonial-img"
                alt="Jena Karlis"
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Enim nisi quem export duis labore cillum magna enim sint.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="/assets/img/testimonials/testimonials-4.jpg"
                className="testimonial-img"
                alt="Matt Brandon"
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 5 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src="/assets/img/testimonials/testimonials-5.jpg"
                className="testimonial-img"
                alt="John Larson"
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
