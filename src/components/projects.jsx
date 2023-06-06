import React from "react";
import "../styles/projects.css";
import Carousel from "../utils/Slice.jsx"


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
          <img src="./public/images/duna.svg" alt="" className="svgThing" />
          <img src="./public/images/ellipseg.png" alt="" className="ellipseproducts"/>
          <Carousel></Carousel> 
        </section>

        <img src="./public/images/Ellipse.png" alt="" className="ball-project"/>
      </section>
    </>
  );
};

export default Projects;
