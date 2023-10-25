import React from "react";
import Carousel from "react-multi-carousel";
import { classData } from "../../utils/data";
import { useHistory } from "react-router-dom";

const AllClasses = () => {
  const history = useHistory();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="class">
      <div
        className="class-offer-area section-bg2 section-padding40 "
        style={{
          backgroundImage:
            "url(" + "./assets/img/gallery/section_bg3.png" + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-11">
              <div className="section-tittle text-center mb-80">
                <h2>classes We Offer</h2>
                <p>
                  Discover our diverse range of classes tailored to meet your
                  interests and aspirations. From academic subjects to artistic
                  pursuits, we provide a comprehensive learning experience for
                  all.
                </p>
              </div>
            </div>
          </div>

          <div className="class-offer-active">
            <Carousel
              responsive={responsive}
              showDots={false}
              infinite={true}
              removeArrowOnDeviceType={["mobile", "tablet"]}
              autoPlaySpeed={3000}
              autoPlay={true}
            >
              {classData?.map((item, index) => {
                return (
                  <div key={index} className="mx-8">
                    <div className="properties pb-30">
                      <div className="properties__card">
                        <div className="properties__img">
                          <a>
                            <img src={item?.img} alt="error" />
                          </a>
                        </div>
                        <div className="properties__caption">
                          <h3>
                            <a href="#">{item?.nameOfClass}</a>
                          </h3>
                          <p className="h-48">{item?.description}</p>
                        </div>
                        <div className="properties__footer d-flex justify-content-between align-items-center">
                          <div className="class-day">
                            <span className="color-font4">
                              {item?.ageRange}
                            </span>
                            <p>Age Group</p>
                          </div>
                          <div className="class-day">
                            <span className="color-font2">
                              {item?.totalClass}
                            </span>
                            <p>Classes</p>
                          </div>
                          <div className="class-day">
                            <span className="color-font1">{item?.price}</span>
                            <p> Price</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>

          {history?.location?.pathname !== "/class" && (
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-all text-center mt-30">
                  <a href="/class" className="border-btn">
                    More Classes
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
