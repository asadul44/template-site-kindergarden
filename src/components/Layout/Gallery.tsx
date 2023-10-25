import React from 'react';
import Carousel from "react-multi-carousel";

const Gallery = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div>

            <div className="instagram-area fix">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="instagram-active">
                                <Carousel responsive={responsive}
                                    showDots={false}
                                    infinite={true}
                                    removeArrowOnDeviceType={["mobile", "tablet","desktop"]}
                                    autoPlaySpeed={3000}
                                    autoPlay={true}
                                >

                                    <div className="single-instagram">
                                        <img src="./assets/img/gallery/instra1.png" alt="error" />
                                        <a href="#"><i className="ti-instagram"></i></a>
                                    </div>
                                    <div className="single-instagram">
                                        <img src="./assets/img/gallery/instra2.png" alt="error" />
                                        <a href="#"><i className="ti-instagram"></i></a>
                                    </div>
                                    <div className="single-instagram">
                                        <img src="./assets/img/gallery/instra3.png" alt="error" />
                                        <a href="#"><i className="ti-instagram"></i></a>
                                    </div>
                                    <div className="single-instagram">
                                        <img src="./assets/img/gallery/instra4.png" alt="error" />
                                        <a href="#"><i className="ti-instagram"></i></a>
                                    </div>
                                    <div className="single-instagram">
                                        <img src="./assets/img/gallery/instra1.png" alt="error" />
                                        <a href="#"><i className="ti-instagram"></i></a>
                                    </div>
                                    <div className="single-instagram">
                                        <img src="./assets/img/gallery/instra4.png" alt="error" />
                                        <a href="#"><i className="ti-instagram"></i></a>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;