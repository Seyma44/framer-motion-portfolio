import React from "react";
import Heading from "../components/common/Heading";
import { about } from "../data/dummydata";


const About: React.FC = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className='about' id="about">
        <div className='container flex'>
          {about.map((val, index) => (
            <React.Fragment key={index}>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <div className="buttons-container">
                <button onClick={scrollToPortfolio}>See Works</button>
                  <button className='primaryBtn'>Download CV</button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
