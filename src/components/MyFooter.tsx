import React from "react";

const MyFooter = () => {
  return (
    <div>
      <footer>
        <div className="footer-wrappper footer-bg">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-logo mb-25">
                        <a href="index.html">
                          <img
                            src="./assets/img/logo/logo2_footer.png"
                            alt="error"
                          />
                        </a>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p>
                            Discover our Kindergarten, a nurturing and inspiring
                            environment where children blossom, curiosity
                            thrives, and a love for learning is ignited. Join us
                            on an exciting educational adventure today!
                          </p>
                        </div>
                      </div>

                      <div className="footer-social">
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://bit.ly/sai4ull">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Quick Links </h4>
                      <ul>
                        <li>
                          <a href="/class">Classes</a>
                        </li>

                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>About Us</h4>
                      <ul>
                        <li>
                          <a href="#">Our Team</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Testimonial</a>
                        </li>
                        <li>
                          <a href="#">Programing</a>
                        </li>
                        <li>
                          <a href="#">User Stories</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>
                        Copyright &copy; All rights reserved | Developed{" "}
                        <i
                          className="fa fa-heart color-danger"
                          aria-hidden="true"
                        ></i>{" "}
                        by{" "}
                        <a
                          href="https://bitsofts.io/"
                          target="_blank"
                          rel="nofollow noopener"
                        >
                          bitsofts.io
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i className="fas fa-level-up-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default MyFooter;
