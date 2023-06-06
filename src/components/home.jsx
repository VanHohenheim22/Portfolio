import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home_head">
          <section className="presentation">
            <h2> <b>Hi!!</b> I'm a fullstack developer</h2>
            <br />
            <p>
              Hello! I'm Jhon. My goal is to create exceptional digital
              experiences and innovative solutions that drive the success of my
              clients. With a strong background in web development and
              experience in both frontend and backend, I am committed to
              delivering high-quality results and meeting established
              objectives.
            </p>
          </section>
          <section className="robo_section">
            <img
              src="./public/images/ellipse.png"
              alt="/ellipse"
              className="ball"
            />
            <img
              src="./public/images/astrobot.png"
              alt="astrobot"
              className="astrobot"
            />
            <img
              src="./public/images/ellipsem.png"
              alt="ellipsem"
              className="ellipsem"
            />
            <img
              src="./public/images/ellipsem2.png"
              alt="ellipsem2"
              className="ellipsem2"
            />
            <img
              src="./public/images/ellipseg.png"
              alt="ellipsem3"
              className="ellipsem3"
            />
            <img
              src="./public/images/ellipseg.png"
              alt="ellipseg"
              className="ellipseg"
            />
          </section>
        </div>
        <div className="home_body">
          <div className="boxHome">
            {" "}
            <i className="bx bxl-javascript"></i> <br />{" "}
            <span>
              Experience in web application development using JavaScript
            </span>{" "}
          </div>
          <div className="boxHome">
            {" "}
            <i className="bx bxl-css3"></i> <br />{" "}
            <span>
              Proficiency in CSS to create attractive and responsive web
              interfaces
            </span>{" "}
          </div>
          <div className="boxHome">
            {" "}
            <i className="bx bxl-react"></i> <br />{" "}
            <span>
              Strong skills in developing cutting-edge applications with React
            </span>{" "}
          </div>
          <div className="boxHome">
            {" "}
            <i className="bx bxl-nodejs"></i> <br />{" "}
            <span>
              "Experience in building efficient applications with Node.js
            </span>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
