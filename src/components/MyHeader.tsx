/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MyHeader = () => {
  const [selected, setSeleted] = useState(false);
  const history = useHistory();
  return (
    <div className="sticky top-0 z-50" style={{ zIndex: 10000 }}>
      <header>
        <div className="header-area">
          <div className="main-header ">
            <div className="header-top d-none d-sm-block">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                      <div className="header-info-left">
                        <ul>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>Mirpur-1 ,
                            Dhaka , Bangladesh
                          </li>
                          <li>
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:+880 1711 385722">
                              {" "}
                              +880 1711 385722
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="header-info-right">
                        <ul className="header-social">
                          <li>
                            <a>
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a>
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="w-screen h-24 bg-white flex justify-between px-5 md:mr-20">
        <div>
          <a href="/">
            <img
              src="./assets/img/logo/logo.png"
              alt="error"
              className="mt-3"
            />
          </a>
        </div>

        <div className="mt-2">
          <nav>
            <input type="checkbox" id="check" />

            <label htmlFor="check" className="checkbtn ">
              <button onClick={() => setSeleted(!selected)}>
                {" "}
                {!selected ? (
                  <p
                    style={{
                      position: "absolute",
                      top: 15,
                      right: 30,
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    &#9776;{" "}
                  </p>
                ) : (
                  <img
                    src="./assets/img/blc-removebg-preview.png"
                    style={{
                      position: "absolute",
                      top: 22,
                      right: 30,
                      fontSize: "15px",
                    }}
                    width="20px"
                    height="20px"
                  />
                )}{" "}
              </button>{" "}
            </label>

            <ul className="mt-3">
              <li className="active">
                <a
                  href="/"
                  className={`${
                    history?.location?.pathname === "/" && "text-pink-600"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/class"
                  className={`${
                    history?.location?.pathname === "/class" && "text-pink-600"
                  }`}
                >
                  Class
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`${
                    history?.location?.pathname === "/about" && "text-pink-600"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={`${
                    history?.location?.pathname === "/blog" && "text-pink-600"
                  }`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`${
                    history?.location?.pathname === "/contact" &&
                    "text-pink-600"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
