import React from 'react'

function Features() {
    return (
        <>
            <section id="features" className="features section">

                <div className="container">

                    <div className="row gy-4">
                        <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src="assets/img/features-bg.jpg" alt="" /></div>
                        <div className="col-lg-6">

                            <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-code-slash flex-shrink-0"></i>
                                <div>
                                    <h4>Custom Web Development</h4>
                                    <p>We create tailored web solutions using modern technologies like React and Laravel, ensuring your site is robust and scalable.</p>
                                </div>
                            </div>

                            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-paint-bucket flex-shrink-0"></i>
                                <div>
                                    <h4>Creative Graphic Design</h4>
                                    <p>Our design team crafts visually stunning graphics that effectively communicate your brand identity and resonate with your audience.</p>
                                </div>
                            </div>

                            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-hand-thumbs-up flex-shrink-0"></i>
                                <div>
                                    <h4>Collaborative Approach</h4>
                                    <p>We work closely with you throughout the development process to ensure your vision is realized at every stage.</p>
                                </div>
                            </div>

                            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="500">
                                <i className="bi bi-shield-check flex-shrink-0"></i>
                                <div>
                                    <h4>Ongoing Support</h4>
                                    <p>Our commitment doesn't end at delivery. We provide ongoing support and maintenance to keep your website running smoothly.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Features;