import React from "react";
import WelcomeKindergarten from "./WelcomeKindergarten";
import AllClasses from "./AllClasses";
import DrawingEvent from "./DrawingEvent";
import Teacher from "./Teacher";
import GardianCommets from "./GardianCommets";
import Gallery from "./Gallery";

const Home = () => {
  const gotoClass = () => {
    const scrollSection = document.getElementById("class");
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div
              className="preloader-img pere-text"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="./assets/img/logo/loder.png" alt="error" />
            </div>
          </div>
        </div>
      </div>

      {/* <main> */}

      <section className="slider-area ">
        <div className="slider-active">
          <div
            className="single-slider slider-height d-flex align-items-center "
            style={{
              backgroundImage: "url(./assets/img/gallery/instra2.png)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-11">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInLeft" data-delay="0.2s">
                      Quality
                      <br /> Learning
                    </h1>
                    <span data-animation="fadeInLeft" data-delay="0.4s">
                      For Every Child
                    </span>
                    <button
                      onClick={gotoClass}
                      className="rounded-full bg-pink-500 hover:bg-pink-600 px-10 py-3 text-white"
                      data-animation="fadeInLeft"
                      data-delay="0.7s"
                    >
                      Explore Classes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WelcomeKindergarten />

      <AllClasses />

      <DrawingEvent />

      <Teacher />

      <GardianCommets />

      <Gallery />
    </div>
  );
};

export default Home;
