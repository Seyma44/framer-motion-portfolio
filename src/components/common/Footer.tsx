import React from "react";
import { social } from "../../data/dummydata";
import { SvgIconComponent } from '@mui/icons-material';

interface SocialItem {
  icon: SvgIconComponent;
}

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        {social.map((item: SocialItem, index: number) => (
          <i key={index} data-aos="zoom-in">
            {<item.icon />} {/* Rendering the icon component */}
          </i>
        ))}
        <p data-aos="zoom-in">All Right Reserved 2024</p>
      </footer>
    </>
  );
};

export default Footer;
