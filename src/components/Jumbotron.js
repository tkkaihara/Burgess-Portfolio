import React from "react";
import { Link } from "react-scroll";

export default function Jumbotron() {
  return (
    <section id="landing">
      <div className="header-box">
        <div className="header-text">
          <h1>Victoria Burgess</h1>
        </div>
        <div className="header-secondary">
          <div>
            <p className="header-text mb-4">UI/UX Designer</p>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="call-to-action"
            >
              My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
