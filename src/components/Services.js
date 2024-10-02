import React from 'react'

function Services() {
    return (
        <>
            <section id="services" className="services section">


             <div className="container section-title" data-aos="fade-up">
    <h2>Our Services</h2>
    <p>Explore the range of services we offer.</p>
</div>

<div className="container">
    <div className="row gy-4">

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-code-slash"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                    <h3>Custom Web Development</h3>
                </a>
                <p>We provide tailored web solutions using modern technologies to meet your business needs and enhance user experience.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-paint-bucket"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                    <h3>Graphic Design Services</h3>
                </a>
                <p>Our creative team designs visually appealing graphics that effectively communicate your brand's message and identity.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-arrow-repeat"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                    <h3>Website Maintenance</h3>
                </a>
                <p>We offer ongoing support and maintenance services to ensure your website runs smoothly and efficiently.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-people"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                    <h3>Collaborative Development</h3>
                </a>
                <p>Our collaborative approach involves working closely with clients to understand their vision and deliver exceptional results.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-bell"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                    <h3>SEO Optimization</h3>
                </a>
                <p>We implement effective SEO strategies to improve your website's visibility and drive more traffic to your business.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                    <h3>Consultation Services</h3>
                </a>
                <p>We offer expert consultation to help you strategize and navigate the digital landscape for better outcomes.</p>
            </div>
        </div>

    </div>
</div>


            </section>
        </>
    )
}

export default Services;