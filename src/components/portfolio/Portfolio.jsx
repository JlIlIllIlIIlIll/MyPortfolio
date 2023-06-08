import React from "react";
import "./portfolio.css";
import Project1 from "../../assets/ASTROCAT.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      name: "Project 1",
      img: Project1,
    },
    {
      id: 2,
      name: "Project 2",
      img: Project1,
    },
    {
      id: 3,
      name: "Project 3",
      img: Project1,
    },
    {
      id: 4,
      name: "Project 4",
      img: Project1,
    },
  ];
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My work</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          {data.map((item) => (
            <div key={item.id} className="portfolio__item">
              <img src={item.img} alt={item.name} className="portfolio__img" />
              <h3 className="portfolio__name">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
