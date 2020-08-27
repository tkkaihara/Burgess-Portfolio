import React from "react";
import Picture from "../img/Contact.png";
import Resume from "../files/Resume.pdf";

export default function About() {
  return (
    <>
      <section id="contact" className="contact-background">
        <div className="container">
          <section id="contact" className="text-center py-2">
            <h2 className="section-title">Contact Me!</h2>
            <div className="contact-bottom-line"></div>
            <div className="contact-outer-grid">
              <div className="contact-inner-grid">
                <div className="social-grid">
                  <div className="social-grid-item">
                    <a
                      href="https://www.linkedin.com/in/victoria-burgess"
                      target="_blank"
                      className="social-link"
                    >
                      <i class="fab fa-linkedin"></i>
                      <span>www.linkedin.com/in/victoria-burgess</span>
                    </a>
                  </div>
                  <div className="social-grid-item social-link">
                    <i class="fas fa-envelope-square"></i>
                    <span>victoriajaneburgess@gmail.com</span>
                  </div>
                  <div className="social-grid-item social-link">
                    <i class="fas fa-phone-square-alt"></i>{" "}
                    <span>206-251-8047</span>
                  </div>
                  <div className="social-grid-item social-link">
                    <a href={Resume} target="_blank" className="social-link">
                      <i class="fas fa-file-alt"></i>{" "}
                      <span>Re&#769;sume&#769;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-inner-grid">
                <img
                  src={Picture}
                  alt="Avatar Picture"
                  className="contact-picture"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
