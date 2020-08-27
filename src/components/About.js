import React from "react";
import Picture from "../img/Avatar.png";

export default function About() {
  return (
    <>
      <section id="about" className="about-background">
        <div className="container">
          <section id="about" className="text-center py-2">
            <h2 className="section-title">About Me</h2>
            <div className="about-bottom-line"></div>
            <div className="about-outer-grid">
              <div className="about-inner-grid">
                <img
                  src={Picture}
                  alt="Avatar Picture"
                  className="about-picture"
                />
              </div>
              <div className="about-inner-grid">
                <p className="lead">
                  I am a UX/UI designer specializing in{" "}
                  <span className="bold">modern</span> and{" "}
                  <span className="bold">user-centered design</span>. Using{" "}
                  <span className="bold">Figma</span> and{" "}
                  <span className="bold">Adobe Xd</span>, I have experience
                  building wireframes, HIFI mockups and prototypes, and mobile
                  apps. My past experiences have allowed me to carry a{" "}
                  <span className="bold">client centered perspective</span> and
                  a focus on <span className="bold">accessibility</span> to my
                  design work. I enjoy working with others, being creative to
                  problem solve, and creating a product that works well for all.
                  In my free time, I enjoy hiking with my Labrador, camping, and
                  playing video games with friends. I look forward to hearing
                  from you!
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
