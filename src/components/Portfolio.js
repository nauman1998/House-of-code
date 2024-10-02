import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Isotope from 'isotope-layout';

function Portfolio() {

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: '.glightbox'
    });

    // Initialize Isotope
    const isotope = new Isotope('.isotope-container', {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry'
    });

    // Filter items on click
    const filters = document.querySelectorAll('.portfolio-filters li');
    filters.forEach(filter => {
      filter.addEventListener('click', function () {
        filters.forEach(el => el.classList.remove('filter-active'));
        this.classList.add('filter-active');
        const filterValue = this.getAttribute('data-filter');
        isotope.arrange({ filter: filterValue });
      });
    });
  }, []);

  return (
    <>
      <section id="portfolio" className="portfolio section">


        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 my-1">
              <div className="card zoom-animation">
                <div className="card-body">
                <div className="img-port mb-5">
                  <img src="https://www.taloinnovations.com/_next/image?url=%2Fimages%2Fportfolio%2Fhr.jpg&w=3840&q=75" alt="" />
                </div>
                <div>
                  <button className="cta-btn-mine mb-3">Human Resource</button>
                  <a className="block" href="/portfolio/hrm">
                  <h3 className="font-semibold leading-[1.33]">HR Management System</h3>
                  </a>
                  <div className="d-flex items-center gap-2">
                    <p>Amanahh</p><span><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                    <circle cx="2.5" cy="3" r="2.5" fill="" claclassNamess="fill-[#D8DBD0] dark:fill-[#3B3C39]"></circle>
                    </svg></span><p>August 2024</p>
                    </div>
                    <p>HRMS Development / Implementation</p>
                    <p>Services</p>
                  </div>
                </div>
                

              </div>
            </div>
            <div className="col-lg-4 my-1">
              <div className="card zoom-animation">
                <div className="card-body">
                <div className="img-port mb-5">
                  <img src="https://www.taloinnovations.com/_next/image?url=%2Fimages%2Fportfolio%2Fhr.jpg&w=3840&q=75" alt="" />
                </div>
                <div>
                  <button className="cta-btn-mine mb-3">Human Resource</button>
                  <a className="block" href="/portfolio/hrm">
                  <h3 className="font-semibold leading-[1.33]">HR Management System</h3>
                  </a>
                  <div className="d-flex items-center gap-2">
                    <p>Amanahh</p><span><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                    <circle cx="2.5" cy="3" r="2.5" fill="" claclassNamess="fill-[#D8DBD0] dark:fill-[#3B3C39]"></circle>
                    </svg></span><p>August 2024</p>
                    </div>
                    <p>HRMS Development / Implementation</p>
                    <p>Services</p>
                  </div>
                </div>
                

              </div>
            </div>
            <div className="col-lg-4 my-1">
              <div className="card zoom-animation">
                <div className="card-body">
                <div className="img-port mb-5">
                  <img src="https://www.taloinnovations.com/_next/image?url=%2Fimages%2Fportfolio%2Fhr.jpg&w=3840&q=75" alt="" />
                </div>
                <div>
                  <button className="cta-btn-mine mb-3">Human Resource</button>
                  <a className="block" href="/portfolio/hrm">
                  <h3 className="font-semibold leading-[1.33]">HR Management System</h3>
                  </a>
                  <div className="d-flex items-center gap-2">
                    <p>Amanahh</p><span><svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                    <circle cx="2.5" cy="3" r="2.5" fill="" claclassNamess="fill-[#D8DBD0] dark:fill-[#3B3C39]"></circle>
                    </svg></span><p>August 2024</p>
                    </div>
                    <p>HRMS Development / Implementation</p>
                    <p>Services</p>
                  </div>
                </div>
                

              </div>
            </div>
          </div>

        </div>

        {/* <div className="container">
                    <div className="isotope-layout" data-layout="masonry" data-sort="original-order">

                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Card</li>
                            <li data-filter=".filter-branding">Web</li>
                        </ul>

                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
                        </div>

                    </div>
                </div> */}
      </section>
    </>
  );
}

export default Portfolio;
