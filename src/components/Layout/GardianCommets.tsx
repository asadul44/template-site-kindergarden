import React from "react";
import Carousel from "react-multi-carousel";
import { FeedbackData } from "../../utils/data";

const GardianCommets = () => {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div
        className="testimonial-area testimonial-padding section-bg2"
        style={{
          backgroundImage:
            "url(" + "./assets/img/gallery/section_bg3.png" + ")",
        }}
      >
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-9 col-lg-9 col-md-7">
              <div className="h1-testimonial-active">
                <Carousel
                  responsive={responsive2}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  infinite={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  {FeedbackData?.map((item, index) => {
                    return (
                      <div className="single-testimonial text-center">
                        <div className="testimonial-caption ">
                          <div className="testimonial-top-cap">
                            <img
                              src="./assets/img/gallery/testimonial.png"
                              alt="error"
                            />
                            <p>{item?.description}</p>
                          </div>

                          <div className="testimonial-founder d-flex align-items-center justify-content-center">
                            <div className="founder-img">
                              <img
                                src="./assets/img/gallery/founder-img.svg"
                                alt="error"
                              />
                            </div>
                            <div className="founder-text">
                              <span>{item?.name}</span>
                              <p>{item?.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardianCommets;
