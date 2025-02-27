import React from 'react';
import profilePhoto from '../assets/images/satish_pf.png'; // Adjust path if needed

function Contact() {
    const sendWhatsApp = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventDate = document.getElementById('event-date').value;
        const location = document.getElementById('location').value;
        const message = document.getElementById('message').value;

        const services = [];
        if (document.getElementById('checkbox1').checked) services.push('Wedding');
        if (document.getElementById('checkbox2').checked) services.push('Pre-Wedding');
        if (document.getElementById('checkbox3').checked) services.push('Photoshoots');
        if (document.getElementById('checkbox4').checked) services.push('Other Shoots');

        if (!name || !email || !eventDate || !location || !message || services.length === 0) {
            alert('Please fill all required fields and select at least one service!');
            return;
        }

        const formattedMessage = `Hello, I'm interested in booking your photography services. Here are my details:
Name: ${name}
Email: ${email}
Event Date: ${eventDate}
Event Location: ${location}
Services: ${services.join(', ')}
Event Details: ${message}

Looking forward to your response!`;

        const whatsappURL = `https://wa.me/919632825461?text=${encodeURIComponent(formattedMessage)}`;
        window.open(whatsappURL, '_blank');
    };

    const sendEmail = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventDate = document.getElementById('event-date').value;
        const location = document.getElementById('location').value;
        const message = document.getElementById('message').value;

        const services = [];
        if (document.getElementById('checkbox1').checked) services.push('Wedding');
        if (document.getElementById('checkbox2').checked) services.push('Pre-Wedding');
        if (document.getElementById('checkbox3').checked) services.push('Photoshoots');
        if (document.getElementById('checkbox4').checked) services.push('Other Shoots');

        if (!name || !email || !eventDate || !location || !message || services.length === 0) {
            alert('Please fill all required fields and select at least one service!');
            return;
        }

        const formattedMessage = `Hello, I'm interested in booking your photography services. Here are my details:

Name: ${name}
Email: ${email}
Event Date: ${eventDate}
Event Location: ${location}
Services: ${services.join(', ')}
Event Details: ${message}

Looking forward to your response!`;

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=satishkasi31@gmail.com&su=Photography Booking Request&body=${encodeURIComponent(formattedMessage)}`;

        window.open(gmailURL, '_blank');
    };

    return (
        <section className="contact section-padding" id="contact">
            <div className="container">
                {/* Profile Section */}
                <div className="row">
                    <div className="col-lg-7 col-12 mx-auto text-center" data-aos="fade-up">
                        <img src={profilePhoto} alt="Profile" className="profile-photo mb-3" />
                        <h3 className="profile-name">Satish Kasi</h3>
                        <p className="profile-description">
                          Hey there! I'm the proud founder of StoriesbySatish.K and a passionate storyteller through the lens. With over seven years of experience in photography, I have had the privilege of capturing life's most cherished moments, turning them into timeless stories.
                        </p>

                        {/* Contact Info */}
                        <div className="contact-info mt-3 d-flex justify-content-center gap-4">
                            <p>
                                <i className="bi bi-telephone me-2"></i>
                                <a href="tel:+919632825461">+91 96328 25461</a>
                            </p>
                            <p>
                                <i className="bi bi-instagram me-2"></i>
                                <a href="https://instagram.com/storiesbysatish.k" target="_blank" rel="noopener noreferrer">@storiesbysatish.k</a>
                            </p>
                        </div>
                        
                        <div className="contact-icons">
      {/* Instagram Icon */}
      <a href="https://www.instagram.com/storiesbysatish.k" target="_blank" rel="noopener noreferrer" className="icon-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
      </a>

      {/* Call Icon */}
      <a href="tel:+919632825461" className="icon-btn">
        <img src="https://cdn-icons-png.flaticon.com/512/126/126341.png" alt="Call" />
      </a>

      {/* WhatsApp Icon */}
      <a href="https://wa.me/919632825461" target="_blank" rel="noopener noreferrer" className="icon-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </div>

                        {/* Separator Line */}
                        <hr className="profile-separator" />
                        <br />
                        <br />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="row">
                    <div className="col-lg-7 col-12 mx-auto">
                        <h2 className="mb-4 text-center" data-aos="fade-up">Lock your Moments, <br /> Book your Shoot</h2>

                        <form className="contact-form" role="form" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-6 col-6">
                                    <label htmlFor="name" className="form-label">Name <sup className="text-danger">*</sup></label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />
                                </div>

                                <div className="col-lg-6 col-6">
                                    <label htmlFor="email" className="form-label">Email <sup className="text-danger">*</sup></label>
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                                </div>

                                <div className="col-lg-6 col-6 mt-4">
                                    <label htmlFor="event-date" className="form-label">Event Date <sup className="text-danger">*</sup></label>
                                    <input type="date" name="event-date" id="event-date" className="form-control" required />
                                </div>

                                <div className="col-lg-6 col-6 mt-4">
                                    <label htmlFor="location" className="form-label">Event Location <sup className="text-danger">*</sup></label>
                                    <input type="text" name="location" id="location" className="form-control" placeholder="Event location" required />
                                </div>

                                <div className="col-12 my-4">
                                    <label htmlFor="message" className="form-label">Event Details</label>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Tell us about the project" required></textarea>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="services" className="form-label">Services <sup className="text-danger">*</sup></label>
                                </div>

                                <div className="col-lg-3 col-12">
                                    <div className="form-check">
                                        <input type="checkbox" id="checkbox1" name="checkbox1" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="checkbox1">Wedding</label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <div className="form-check">
                                        <input type="checkbox" id="checkbox2" name="checkbox2" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="checkbox2">Pre-Wedding</label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <div className="form-check">
                                        <input type="checkbox" id="checkbox3" name="checkbox3" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="checkbox3">Photoshoots</label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <div className="form-check">
                                        <input type="checkbox" id="checkbox4" name="checkbox4" className="form-check-input" />
                                        <label className="form-check-label" htmlFor="checkbox4">Other Shoots</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
    <div className="col-12 text-center">
        <div className="button-container">
            <button type="button" onClick={sendWhatsApp} className="custom-button">
                <i className="bi bi-whatsapp"></i> Send via WhatsApp
            </button>
            <button type="button" onClick={sendEmail} className="custom-button">
                <i className="bi bi-envelope"></i> Send via Email
            </button>
        </div>
    </div>
</div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;
