import React from "react";
import videoSrc from "../assets/videos/Website video.mp4";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="heroText">
        <h1 className="text-white mt-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="800">
          StoriesbySatish.K
        </h1>
        <p className="text-secondary-white-color" data-aos="fade-up" data-aos-delay="1000">
          "Capturing Moments, Creating Stories – Satish Kumar S"
          <br />
          <br />
          <a href="#contact" className="text-white custom-link" data-aos="zoom-in" data-aos-delay="300">
            <strong>Book Your Shoot</strong>
          </a>
        </p>
      </div>

      <div className="videoWrapper" data-aos="fade-in" data-aos-delay="500">
        <video autoPlay loop muted className="custom-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="overlay" data-aos="fade-in" data-aos-delay="600"></div>
    </section>
  );
};

export default Hero;
