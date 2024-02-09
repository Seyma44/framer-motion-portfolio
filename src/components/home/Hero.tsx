import React from "react";
import { home } from "../../data/dummydata";
import Typewriter from "typewriter-effect";

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className='hero' id="home">
        {home.map((val, i) => (
          <div className='heroContent' key={i}>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='primaryBtn' data-aos='fade-up-right' onClick={scrollToAbout}>
        About Me
      </button>
          </div>
        ))}
      </section>
    </>
  );
};
