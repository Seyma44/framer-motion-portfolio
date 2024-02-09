import React from "react";
import  Heading  from "../components/common/Heading";
import { services } from "../data/dummydata";

const Services: React.FC = () => {
  return (
    <section className='services' id="services">
      <div className='container'>
        <Heading title='Services' />
        <div className='content grid3'>
          {services.map((item, index) => (
            <div className='box' data-aos='flip-left' key={index}>
              <span> {<item.icon />} </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
