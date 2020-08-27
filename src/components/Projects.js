import React from "react";
import Tiana from "../img/Tiana.png";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects-background">
        <div className="container">
          <section id="projects" className="text-center py-2">
            <h2 className="section-title">Some of My Work</h2>
            <div className="projects-bottom-line"></div>
            <div className="gallery">
              <div className="items">
                <div className="item">
                  <div className="item-image">
                    <img
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9"
                      alt="Project Image"
                    />
                  </div>
                  <div className="item-text">
                    <div className="item-text-wrap">
                      <a
                        className="item-text-title"
                        target="_blank"
                        href="https://www.figma.com/file/uRle9b0wRLew9gobg4T8F9/Outdoor-Burlap?node-id=0%3A1"
                      >
                        Outdoor Burlap
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item-image">
                    <img src={Tiana} alt="Project Image" />
                  </div>
                  <div className="item-text">
                    <div className="item-text-wrap">
                      <a
                        className="item-text-title"
                        target="_blank"
                        href="https://www.figma.com/file/gxUyj7vRhZUGJYM2itrw1J/Tiana-App-HiFi-Prototype-V1.0?node-id=0%3A1"
                      >
                        Tiana Cosette
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item-image">
                    <img
                      src="https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9"
                      alt="Project Image"
                    />
                  </div>
                  <div className="item-text">
                    <div className="item-text-wrap">
                      <a
                        className="item-text-title"
                        target="_blank"
                        href="https://xd.adobe.com/view/e755bcb2-91ee-41b2-969c-a2aaf7348043-b206/"
                      >
                        Roar Bikes
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item-image">
                    <img
                      src="https://images.unsplash.com/photo-1545565319-e1b6be69a9a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9"
                      alt="Project Image"
                    />
                  </div>
                  <div className="item-text">
                    <div className="item-text-wrap">
                      <a
                        className="item-text-title"
                        target="_blank"
                        href="https://xd.adobe.com/view/0c2eec11-958c-4d40-ba5f-6cf351ec9541-597d/"
                      >
                        Roar Bikes Wireframe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
