import React from "react";
import portfolio1 from "../assets/images/portfolio/001.jpg";
import portfolio2 from "../assets/images/portfolio/candids.jpg";
import portfolio3 from "../assets/images/portfolio/27.png";
import portfolio4 from "../assets/images/portfolio/rajes.jpg";
import portfolio5 from "../assets/images/portfolio/005.jpg";
import portfolio6 from "../assets/images/portfolio/019.jpg";

const Portfolio = () => {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center" data-aos="fade-up">
              Portfolio
            </h2>
          </div>

          <div className="col-lg-6 col-12">
            <div className="portfolio-thumb mb-5" data-aos="fade-up">
              <a href={portfolio1} className="image-popup">
                <img src={portfolio1} className="img-fluid portfolio-image" alt="Timeless Elegance" />
              </a>
              <div className="portfolio-info">
                <h4 className="portfolio-title mb-0">Timeless Elegance</h4>
                <p className="text-danger">A Love Story Captured in Frames</p>
              </div>
            </div>

            <div className="portfolio-thumb" data-aos="fade-up">
              <a href={portfolio2} className="image-popup">
                <img src={portfolio2} className="img-fluid portfolio-image" alt="Sacred Union" />
              </a>
              <div className="portfolio-info">
                <h4 className="portfolio-title mb-0">Sacred Union</h4>
                <p className="text-success">Traditional Wedding Rituals</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="portfolio-thumb mt-5 mt-lg-0 mb-5" data-aos="fade-up">
              <a href={portfolio3} className="image-popup">
                <img src={portfolio3} className="img-fluid portfolio-image" alt="Bridal Grace" />
              </a>
              <div className="portfolio-info">
                <h4 className="portfolio-title mb-0">Bridal Grace</h4>
                <p className="text-warning">Elegance & Anticipation</p>
              </div>
            </div>

            <div className="portfolio-thumb" data-aos="fade-up">
              <a href={portfolio4} className="image-popup">
                <img src={portfolio4} className="img-fluid portfolio-image" alt="Whispering Love" />
              </a>
              <div className="portfolio-info">
                <h4 className="portfolio-title mb-0">Whispering Love</h4>
                <p className="text-info">Pre-Wedding Moments</p>
              </div>
            </div>
          </div>

          <div className="col-12 text-center" data-aos="fade-up">
            <a href={portfolio5} className="image-popup">
              <img src={portfolio5} className="img-fluid portfolio-image" alt="Timeless Romance" />
            </a>
            <div className="portfolio-info">
              <h4 className="portfolio-title mb-0">Timeless Romance</h4>
              <p className="text-info">Cinematic Love Story</p>
            </div>
          </div>

          <div className="col-12 text-center mt-4" data-aos="fade-up">
            <a href={portfolio6} className="image-popup">
              <img src={portfolio6} className="img-fluid portfolio-image" alt="Blossoming Love" />
            </a>
            <div className="portfolio-info">
              <h4 className="portfolio-title mb-0">Blossoming Love</h4>
              <p className="text-info">Engagement Shoot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;