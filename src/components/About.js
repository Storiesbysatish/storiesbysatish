import React from "react";
import aboutImg from "../assets/images/1E6A0611.jpg";
import slide1 from "../assets/images/people/1E6A2429.jpg";
import slide2 from "../assets/images/people/19.jpg";
import slide3 from "../assets/images/people/12.jpg";
import slide4 from "../assets/images/people/284A7237.jpg";
import slide5 from "../assets/images/people/012.jpg";

const About = () => {
  return (
    <section className="section-padding pb-0" id="about">
      <div className="container mb-5 pb-lg-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3" data-aos="fade-up">
              Let us create...
            </h2>
          </div>
          <div className="col-lg-6 col-12 mt-3 mb-lg-5">
            <p className="me-4" data-aos="fade-up" data-aos-delay="300">
              "Let us create timeless memories, frame by frame, because every picture tells a story, and every story deserves to be told beautifully."
            </p>
          </div>
          <div className="col-lg-6 col-12 mt-lg-3 mb-lg-5">
            <p data-aos="fade-up" data-aos-delay="500">
              "At StoriesbySatish, we believe every moment is a story waiting to be captured, cherished, and relived. Let us create memories that last a lifetime."
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          
          {/* Left Side - Static Image */}
          <div className="col-lg-3 col-12 p-0">
            <img src={aboutImg} className="img-fluid about-image" alt="Studio" />
          </div>
          <div className="col-lg-3 col-12 bg-dark d-flex flex-column justify-content-center py-5 px-4 pt-lg-4 pb-lg-0">
            <h3 className="text-white mb-3" data-aos="fade-up">
              Capturing the joy, love, and emotions of every moment.
            </h3>
            <p className="text-secondary-white-color" data-aos="fade-up">
              "Each frame tells a unique story, preserving your memories with care and artistry."
            </p>
            <div className="mt-3 custom-links">
              <a href="#news" className="text-white custom-link" data-aos="zoom-in" data-aos-delay="100">
                Read News & Events
              </a>
              <a href="#contact" className="text-white custom-link" data-aos="zoom-in" data-aos-delay="300">
                Work with Us
              </a>
            </div>
          </div>

{/* Right Side - Full-Width Carousel with Dynamic Overlay */}
<div className="col-lg-6 col-12 p-0">
  <section id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slide1} className="img-fluid team-image w-100" alt="Wedding" />
        <div className="team-thumb bg-warning">
          <h3 className="text-white mb-0">Wedding</h3>
          <p className="text-secondary-white-color mb-0">Muhurtham</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={slide2} className="img-fluid team-image w-100" alt="Pre-Wedding" />
        <div className="team-thumb bg-primary">
          <h3 className="text-white mb-0">Pre-Wedding.</h3>
          <p className="text-secondary-white-color mb-0">Romantic Beginnings</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={slide3} className="img-fluid team-image w-100" alt="Maternity" />
        <div className="team-thumb bg-success">
          <h3 className="text-white mb-0">Maternity</h3>
          <p className="text-secondary-white-color mb-0">Motherhood</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={slide4} className="img-fluid team-image w-100" alt="Candids" />
        <div className="team-thumb bg-info">
          <h3 className="text-white mb-0">Candids</h3>
          <p className="text-secondary-white-color mb-0">Untold Moments</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={slide5} className="img-fluid team-image w-100" alt="Photoshoots" />
        <div className="team-thumb bg-danger">
          <h3 className="text-white mb-0">Photoshoots</h3>
          <p className="text-secondary-white-color mb-0">Moments</p>
        </div>
      </div>
    </div>

    {/* Navigation Buttons */}
    <button className="carousel-control-prev custom-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next custom-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </section>
</div>





        </div>
      </div>
    </section>
  );
};

export default About;
