import React from "react";
import { project } from "../data/dummydata";
import CountUp from "react-countup";

const Counter: React.FC = () => {
  return (
    <>
      <div className='hero counter'>
        <div className='container grid3 grid4'>
          {project.map((item) => (
            <div className='box' data-aos='zoom-in' key={item.id}>
              {<item.icon />} 
              <h1 className='heading'>
                <CountUp enableScrollSpy duration={2} end={Number(item.num)} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
