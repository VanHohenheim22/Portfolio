import React from "react";
import "../styles/projects.css";
import Carousel from "../utils/Slice.jsx";

const Projects = () => {
  return (
    <>
      <section className="projects" id="project">
        <section className="informationProjets">
          <h2>Last landing and websites projects</h2>
          <p>
            My portfolio includes a variety of projects I have worked on as a
            full-stack web developer. From interactive web applications to
            e-commerce websites. What sets my projects apart is my passion and
            dedication to delivering quality products. I take pride in my
            ability to understand client needs and translate them into effective
            technical solutions.
          </p>
        </section>
        <section className="projectsCarru">
          <img
            src="https://raw.githubusercontent.com/VanHohenheim22/Portfolio/2e5cb3adf545790b6ad81ea0daedb2616ac44507/public/images/duna.svg"
            alt=""
            className="svgThing"
          />
          <img
            src="https://raw.githubusercontent.com/VanHohenheim22/Portfolio/main/public/images/Ellipseg.png"
            alt=""
            className="ellipseproducts"
          />
          <Carousel></Carousel>
        </section>

        <img
          src="https://raw.githubusercontent.com/VanHohenheim22/Portfolio/main/public/images/Ellipse.png"
          alt=""
          className="ball-project"
        />
      </section>
    </>
  );
};

export default Projects;
