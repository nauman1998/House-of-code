import React, { useEffect } from 'react';

function Stats() {
  // Initialize purecounter after component renders
  useEffect(() => {
    // Ensure purecounter is loaded globally or use an import if you have it as a module
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

  return (
    <>
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-lg-5">
              <img src="assets/img/stats-img.jpg" alt="" className="img-fluid" />
            </div>

            <div className="col-lg-6">
    <h3 className="fw-bold fs-2 mb-3">Building Success Together</h3>
    <p>
        At House of Code, we take pride in delivering exceptional web development and graphic design services tailored to our clients' needs. Our dedication and expertise ensure that we consistently exceed expectations.
    </p>

    <div className="row gy-4">
        <div className="col-lg-6">
            <div className="stats-item d-flex">
                <i className="bi bi-emoji-smile flex-shrink-0"></i>
                <div>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="150"
                        data-purecounter-duration="1"
                        className="purecounter"
                    ></span>
                    <p>
                        <strong>Happy Clients</strong> <span>who trust our expertise</span>
                    </p>
                </div>
            </div>
        </div>

        <div className="col-lg-6">
            <div className="stats-item d-flex">
                <i className="bi bi-journal-richtext flex-shrink-0"></i>
                <div>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="75"
                        data-purecounter-duration="1"
                        className="purecounter"
                    ></span>
                    <p>
                        <strong>Projects Completed</strong> <span>successfully delivered on time</span>
                    </p>
                </div>
            </div>
        </div>

        <div className="col-lg-6">
            <div className="stats-item d-flex">
                <i className="bi bi-headset flex-shrink-0"></i>
                <div>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="2000"
                        data-purecounter-duration="1"
                        className="purecounter"
                    ></span>
                    <p>
                        <strong>Hours Of Support</strong> <span>ensuring client satisfaction</span>
                    </p>
                </div>
            </div>
        </div>

        <div className="col-lg-6">
            <div className="stats-item d-flex">
                <i className="bi bi-people flex-shrink-0"></i>
                <div>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="10"
                        data-purecounter-duration="1"
                        className="purecounter"
                    ></span>
                    <p>
                        <strong>Talented Team Members</strong> <span>dedicated to excellence</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
