import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import pfp1 from '../assets/images/testimoni/freepik__the-style-is-candid-image-photography-with-natural__47519.jpg';
import pfp2 from '../assets/images/testimoni/freepik__the-style-is-candid-image-photography-with-natural__91506.jpg';
import pfp3 from '../assets/images/testimoni/freepik__the-style-is-candid-image-photography-with-natural__91507.jpg';
import pfp4 from '../assets/images/testimoni/freepik__the-style-is-candid-image-photography-with-natural__91508.jpg';
import pfp5 from '../assets/images/testimoni/freepik__the-style-is-candid-image-photography-with-natural__91509.jpg';
import pfp6 from '../assets/images/testimoni/freepik__the-style-is-candid-image-photography-with-natural__91510.jpg';

function Testimonials() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const testimonials = [
        {
            name: "Arjun & Sneha Sharma",
            feedback: "Satish and his team made our wedding moments truly magical. The candid shots were breathtaking!",
            image: pfp1,
            role: "Wedding Clients",
        },
        {
            name: "Rohan & Meera Iyer",
            feedback: "The pre-wedding shoot was beyond our imagination! Every frame felt like a dream.",
            image: pfp2,
            role: "Pre-Wedding Shoot",
        },
        {
            name: "Amit & Kavya Verma",
            feedback: "The Haldi ceremony pictures turned out so vibrant and full of life! Every emotion captured perfectly.",
            image: pfp3,
            role: "Haldi Ceremony",
        },
        {
            name: "Priya & Kunal Joshi",
            feedback: "Our Sangeet pictures captured pure happiness. Satish's team exceeded expectations!",
            image: pfp4,
            role: "Sangeet Ceremony",
        },
        {
            name: "Rahul & Simran Kapoor",
            feedback: "The reception photos looked straight out of a fairytale. Couldn't have asked for better!",
            image: pfp5,
            role: "Reception Night",
        }
    ];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <h2 className="text-center mb-5" data-aos="fade-up">What Clients Say</h2>
                <div className="testimonial-carousel-wrapper">
                    <div className="testimonial-carousel">
                        <div className="testimonial-track">
                            {testimonials.concat(testimonials).map((testimonial, index) => ( // Duplicating for seamless scroll
                                <div className="testimonial-card" key={index}>
                                    <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                                    <div className="testimonial-client">
                                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                                        <div>
                                            <h4 className="testimonial-name">{testimonial.name}</h4>
                                            <p className="testimonial-role">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;