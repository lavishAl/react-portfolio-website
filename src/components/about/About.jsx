import React from "react";
import "./about.css";
import profile_picture from "../../assets/alex.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Alex image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6 Months + <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Sc. Informatics
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                3+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
          I am a Full Stack Software Engineer with a Bachelor of Science in Informatics, specializing in 
          cybersecurity and software engineering from the University of Washington, Seattle. 
          Equipped with strong communication skills, leadership abilities, and a knack for critical thinking and problem-solving, 
          I bring a diverse skill set to the software development landscape. In my previous career, 
          I laid a solid foundation for my transition by immersing myself in the study of cybersecurity and software engineering. 
          Now, as I look toward the future, I aspire to utilize my expertise and passion for secure software solutions to tackle complex 
          problems and contribute to the advancement of the digital realm. With an unwavering commitment to user-centric design and 
          collaboration, I am determined to make a meaningful impact as a Full Stack Engineer.
          </p>
          
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
