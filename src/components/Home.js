import React, { useEffect } from "react";
import Swiper from "swiper/bundle";


const Home = () => {
    useEffect(() => {
        new Swiper(".init-swiper", {
          loop: true,
          speed: 600,
          autoplay: { delay: 3000 },
          slidesPerView: "auto",
          pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
          breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 40 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 120 }
          }
        });
      }, []);
  return (
    <>
    <main className="main">

        {/* <section id="hero" className="hero section dark-background">

                <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in"/>

                <div className="container">

                    <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-xl-6 col-lg-8">
                        <h2>Powerful Digital Solutions With GP<span>.</span></h2>
                        <p>We are team of talented digital marketers</p>
                    </div>
                    </div>

                    <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-box">
                        <i className="bi bi-binoculars"></i>
                        <h3><a href="">Lorem Ipsum</a></h3>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="icon-box">
                        <i className="bi bi-bullseye"></i>
                        <h3><a href="">Dolor Sitema</a></h3>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="icon-box">
                        <i className="bi bi-fullscreen-exit"></i>
                        <h3><a href="">Sedare Perspiciatis</a></h3>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="icon-box">
                        <i className="bi bi-card-list"></i>
                        <h3><a href="">Magni Dolores</a></h3>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
                        <div className="icon-box">
                        <i className="bi bi-gem"></i>
                        <h3><a href="">Nemos Enimade</a></h3>
                        </div>
                    </div>
                    </div>

                </div>

        </section> */}
        
       <section id="hero" className="hero section dark-background">
  <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

  <div className="container">
    <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
      <div className="col-xl-6 col-lg-8">
        <h2>Innovative Digital Solutions with House of Code<span>.</span></h2>
        {/* <p>We are a team of skilled web developers and creative designers, bringing your ideas to life.</p> */}
      </div>
    </div>

    <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div className="icon-box">
          <i className="bi bi-code-slash"></i>
          <h3><a href="">Web Development</a></h3>
          {/* <p>Building responsive, dynamic websites using React and Laravel.</p> */}
        </div>
      </div>
      <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
        <div className="icon-box">
          <i className="bi bi-brush"></i>
          <h3><a href="">Graphic Design</a></h3>
          {/* <p>Creative and impactful designs for your brand’s visual identity.</p> */}
        </div>
      </div>
      <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
        <div className="icon-box">
          <i className="bi bi-layout-text-window-reverse"></i>
          <h3><a href="">UI/UX Design</a></h3>
          {/* <p>Crafting intuitive user experiences with modern design principles.</p> */}
        </div>
      </div>
      <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
        <div className="icon-box">
          <i className="bi bi-tools"></i>
          <h3><a href="">Custom Solutions</a></h3>
          {/* <p>Tailored solutions to meet your specific business needs.</p> */}
        </div>
      </div>
      <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
        <div className="icon-box">
          <i className="bi bi-diagram-3"></i>
          <h3><a href="">Digital Strategy</a></h3>
          {/* <p>Helping you achieve your business goals with a clear digital roadmap.</p> */}
        </div>
      </div>
    </div>
  </div>
</section>


    </main>
    </>
  )
}

export default Home