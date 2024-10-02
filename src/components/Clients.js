import React from 'react'

function Clients() {
  return (
    <>
     <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="Client 1" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="Client 2" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="Client 3"/></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="Client 4"/></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="Client 5"/></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="Client 6"/></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="Client 7"/></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="Client 8"/></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Clients;