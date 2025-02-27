import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-white">
                            <i className="bi-geo-alt-fill me-2"></i>
                            Benagaluru, Karnataka
                        </h5>

                        {/* Phone Number */}
                        <a href="tel:+919632825461" className="custom-link mt-2 mb-5">
                            +91 96328 25461
                        </a>

                        {/* Email */}
                        <a href="mailto:satishkasi31@gmail.com" id='email_footer' className="custom-link mt-2 mb-3">
                            satishkasi31@gmail.com
                        </a>
                    </div>

                    <div className="col-6">
                        <p className="copyright-text mb-0">Copyright © storiesbysatish</p>
                    </div>

                    <div className="col-lg-2 col-5 ms-auto">
                        <ul className="social-icon">
                            <li><a href="#" className="social-icon-link bi-facebook"></a></li>
                            <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>
                            <li><a href="https://www.instagram.com/storiesbysatish.k/" className="social-icon-link bi-instagram" target="_blank" rel="noopener noreferrer"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
