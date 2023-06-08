import React from "react";
import "./portfolio.css";
import Project1 from "../../assets/Work1.png";
import Project2 from "../../assets/Work2.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      name: "My Portfolio",
      img: Project1,
    },
    {
      id: 2,
      name: "EasySave",
      img: Project2,
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
