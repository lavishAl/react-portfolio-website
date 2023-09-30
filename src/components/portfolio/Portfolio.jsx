import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/culinary.png";
import IMG2 from "../../assets/sync.png";
import IMG3 from "../../assets/batman.png";
import IMG4 from "../../assets/fitquest.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "MERN Stack Culinary Dash",
    github: "https://github.com/corydesmond1/CulinaryDash",
    demo: "https://culinarydash-1e778c071eab.herokuapp.com/",
    brief:
      "https://github.com/corydesmond1/CulinaryDash#readme",
  },
  {
    id: 2,
    image: IMG2,
    title: "NodeJs | Express | MongoDB | Syncedin",
    github: "https://github.com/kenneychan/SyncedIn",
    demo: "https://syncedin2-d40349e12dd2.herokuapp.com/",
    brief: "https://github.com/kenneychan/SyncedIn#readme",
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | Batman Memory Card Game",
    github: "https://github.com/lavishAl/MemoryGame2023",
    demo: "https://lavishal.github.io/MemoryGame2023/",
    brief:
      "https://github.com/lavishAl/MemoryGame2023#readme",
  },
  {
    id: 4,
    image: IMG4,
    title: "Python | Django | Postgresql | FitQuest",
    github: "https://github.com/ramibankale/FitQuest",
    brief: "https://github.com/ramibankale/FitQuest#readme",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
