import React from "react";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <h2 className='heading' data-aos='zoom-in-down'>
        {title}
      </h2>
    </>
  );
};

export default Heading;
