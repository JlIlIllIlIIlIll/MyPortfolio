import React from "react";
import "./about.css";
import AboutIMG from "../../assets/ASTROCAT.png";
import CV from "../../assets/CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutIMG} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Following two years of preparatory classes at ESIB in Beirut, I
            enrolled in the engineering cycle of CESI in Normandy (France).
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              id="file-alt"
              fill="var(--container-color)"
            >
              <path d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
