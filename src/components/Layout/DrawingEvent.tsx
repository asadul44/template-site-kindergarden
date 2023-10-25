import React from "react";

const DrawingEvent = () => {
  const gotoEvent = () => {
    const scrollSection = document.getElementById("event");
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="date-events section-bg2 section-padding40"
      style={{
        backgroundImage: "url(" + "./assets/img/gallery/section_bg2.png" + ")",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="date-wrapper">
              <div className="section-tittle text-center mb-30">
                <span className="span">18 Jan 2021</span>
                <h2>Drawing Event</h2>
                <p>
                  Unleash your creativity at our Drawing Event. Join us for a
                  day of artistic inspiration, imagination, and expression. Let
                  your inner artist shine and create amazing works of art.
                </p>
                <button
                  onClick={gotoEvent}
                  className="hover:bg-pink-600 px-10 mt-4 bg-pink-500 rounded-full py-3 text-pink-500 text-white"
                >
                  View Event
                </button>
              </div>

              <div className="cd-timer" id="countdown">
                <div className="cd-item">
                  <span>40</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>18</span>
                  <p>Hours</p>
                </div>
                <div className="cd-item">
                  <span>46</span>
                  <p>Minutes</p>
                </div>
                <div className="cd-item">
                  <span>32</span>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingEvent;
