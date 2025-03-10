import React from "react";
import event1 from "../assets/images/news/284A6246.JPG";
import event2 from "../assets/images/news/53.jpg";
import event3 from "../assets/images/news/haldi.jpg";
import event4 from "../assets/images/news/fghdfdf.jpg";
import event5 from "../assets/images/news/53.jpg";
import event6 from "../assets/images/news/1E6A9357 copy.jpg";

const Events = () => {
  return (
    <section className="news section-padding" id="news">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center" data-aos="fade-up">
              Events & Shoots
            </h2>
          </div>

          {/* Column 1 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="news-thumb mb-4" data-aos="fade-up">
              <img src={eventNew} className="img-fluid rounded news-image" alt="Candids" />
              <span className="badge bg-warning text-dark">Candids</span>
              <h5 className="text-dark">Sacred Vows</h5>
              <p className="text-muted">Tying the Knot</p>
            </div>

            <div className="news-thumb mb-4 mt-n3" data-aos="fade-up">
              <img src={event3} className="img-fluid rounded news-image" alt="Haldi" />
              <span className="badge bg-success text-white">Haldi</span>
              <h5 className="text-dark">Haldi Ceremony</h5>
              <p className="text-muted">The Essence of Purity</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="news-thumb mb-4 mt-3" data-aos="fade-up">
              <img src={event2} className="img-fluid rounded news-image" alt="Mehendi" />
              <span className="badge bg-primary text-white">Mehendi</span>
              <h5 className="text-dark">Mehendi Magic</h5>
              <p className="text-muted">Symbol of Love</p>
            </div>

            <div className="news-thumb mb-4 mt-n4" data-aos="fade-up">
              <img src={event5} className="img-fluid rounded news-image" alt="Portraits" />
              <span className="badge bg-info text-white">Portraits</span>
              <h5 className="text-dark">Timeless Portraits</h5>
              <p className="text-muted">Capturing Smiles</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="news-thumb mb-4" data-aos="fade-up">
              <img src={event4} className="img-fluid rounded news-image" alt="Sangeet" />
              <span className="badge bg-danger text-white">Sangeet</span>
              <h5 className="text-dark">Sangeet Celebrations</h5>
              <p className="text-muted">Rhythms of Love</p>
            </div>

            <div className="news-thumb mb-4 mt-n2" data-aos="fade-up">
              <img src={event6} className="img-fluid rounded news-image" alt="Baby Shoot" />
              <span className="badge bg-dark text-white">Baby Shoots</span>
              <h5 className="text-dark">Baby Shoot</h5>
              <p className="text-muted">Cherishing Moments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
