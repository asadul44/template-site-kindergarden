import React from "react";
import Carousel from "react-multi-carousel";
import { TeachersData } from "../../utils/data";

const Teacher = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div>
      <div className="team-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="cl-xl-8 col-lg-8 col-md-10">
              <div className="section-tittle text-center mb-60">
                <h2>Expert Teachers</h2>
                <p>
                  Our expert teachers bring a wealth of knowledge and experience
                  to the classroom. With a passion for education and a
                  commitment to student success, they inspire, guide, and
                  empower students on their learning journey.
                </p>
              </div>
            </div>
          </div>
          <div className="c-row">
            <div className="lg:mx-16">
              <Carousel
                responsive={responsive}
                showDots={false}
                infinite={true}
                removeArrowOnDeviceType={["mobile", "tablet"]}
                autoPlaySpeed={3000}
                autoPlay={true}
              >
                {TeachersData?.map((item, index) => {
                  return (
                    <div key={index} className="" style={{ margin: "0 15px" }}>
                      <div className="single-team mb-30 text-center">
                        <div className="team-img">
                          <img src={item?.img} alt="error" />
                          <div className="team-caption">
                            <div className="team-social">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                  </a>
                                </li>
                                <li>
                                  {" "}
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="team-info">
                          <h3>
                            <a href="#">{item?.name}</a>
                          </h3>
                          <p>{item?.title}</p>
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
  );
};

export default Teacher;
