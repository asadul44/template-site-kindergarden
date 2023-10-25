import React from "react";

const WelcomeKindergarten = () => {
  return (
    <div id="event" className="about-low-area section-padding40">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-11">
            <div className="section-tittle text-center mb-70">
              <h2>
                Welcome to our <span>Kindergarten</span>
              </h2>
              <p>
                Welcome to our Kindergarten! Discover a nurturing environment
                where children learn, grow, and flourish. Our dedicated
                educators foster a love for learning, promote social
                development, and prepare children for success. Join us on an
                exciting educational journey at our Kindergarten.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="about-caption">
              <div className="single-features mb-30">
                <div className="features-icon">
                  <img src="./assets/img/icon/about-icon1.svg" alt="error" />
                </div>
                <div className="features-caption">
                  <h3 className="color-font1">Inter School Sports</h3>
                  <p>
                    Fostering teamwork, sportsmanship, and talent as students
                    compete, bond, and shine in various athletic pursuits.
                  </p>
                </div>
              </div>
              <div className="single-features mb-30">
                <div className="features-icon">
                  <img src="./assets/img/icon/about-icon2.svg" alt="error" />
                </div>
                <div className="features-caption">
                  <h3 className="color-font2">Friendly Environment</h3>
                  <p>
                    Our friendly environment embraces every individual,
                    fostering a sense of belonging and support.
                  </p>
                </div>
              </div>
              <div className="single-features mb-30">
                <div className="features-icon">
                  <img src="./assets/img/icon/about-icon3.svg" alt="error" />
                </div>
                <div className="features-caption">
                  <h3 className="color-font3">Multimedia Class</h3>
                  <p>
                    Engage in our multimedia classes, where creativity
                    flourishes and students explore the world through
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="about-img ">
              <img
                src="./assets/img/gallery/about2.png"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeKindergarten;
