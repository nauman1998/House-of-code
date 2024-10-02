import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer dark-background">
      <div className="footer-top">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6 footer-about">
        <a href="index.html" className="logo d-flex align-items-center">
          <span className="sitename">House of Code</span>
        </a>
        <div className="footer-contact pt-3">
          <p>Opposite Abbasia Sports Complex</p>
          <p>Canal Road</p>
          <p className="mt-3">
            <strong>Phone:</strong> <span>+92 300 0252210</span>
          </p>
          <p>
            <strong>Email:</strong> <span>Hoc@gmail.com</span>
          </p>
        </div>
        <div className="social-links d-flex mt-4">
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">About us</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Services</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Web Design</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Web Development</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Product Management</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Marketing</a>
          </li>
          <li>
            <i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-12 footer-newsletter">
        <h4>Our Newsletter</h4>
        <p>
          Subscribe to our newsletter and receive the latest news about our
          products and services!
        </p>
        <form
          // action=""
          // method="post"
          className="php-email-form"
        >
          <div className="newsletter-form">
            <input type="email" name="email" />
            <input type="submit" value="Subscribe" />
          </div>
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your subscription request has been sent. Thank you!
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="copyright">
  <div className="container text-center">
    <p>
      © <span>Copyright</span>{' '}
      <strong className="px-1 sitename">House of Code</strong>{' '}
      <span>All Rights Reserved</span>
    </p>
    <div className="credits">
      Designed by <a href="#">House Of Code</a>
    </div>
  </div>
</div>

      </footer>
    </>
  );
};

export default Footer;
