import React from 'react'

const Comapny = () => {
  return (
    <>
    
    <section id="about" className="about section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">
                <div className="col-lg-6 order-1 order-lg-2">
                    <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-6 order-2 order-lg-1 content">
                    <h3>Innovative Solutions for Your Digital Needs</h3>
                    <p className="fst-italic">
                    At House of Code, we provide cutting-edge web development and graphic design services, tailored to help businesses thrive in the digital landscape. Whether you're looking for a modern website or a unique visual identity, our team of experts is here to bring your vision to life.
                    </p>
                    <ul>
                    <li><i className="bi bi-check2-all"></i> <span><b>Comprehensive Web Development </b>
                    Our team specializes in creating robust, user-friendly web applications using the latest technologies like React and Laravel. We ensure that your website is fast, secure, and scalable to grow with your business needs.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span><b>Creative Graphic Design </b>
                    From logos to complete brand identities, we bring creativity and professionalism to every project. Our designers collaborate with you to craft visuals that communicate your brand's message effectively and make a lasting impression.</span></li>
                    <li><i className="bi bi-check2-all"></i> <span><b>Dedicated to Excellence </b>
                    We are committed to delivering high-quality digital solutions with a focus on innovation and precision. At <b>House of Code</b>, we don’t just build websites and create designs; we build partnerships, working closely with our clients to ensure success in every project.</span></li>
                    </ul>
                    <p>
                    With us, you can trust that your vision is in capable hands, and we are dedicated to transforming your ideas into reality.
                    </p>
                </div>
                </div>

            </div>

        </section>
    
    </>
  )
}

export default Comapny;