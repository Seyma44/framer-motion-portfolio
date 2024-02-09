import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../../data/dummydata";
import { Menu } from "@mui/icons-material";

export const Header: React.FC = () => {
  const [responsive, setResponsive] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <div className='container flexsb'>
          <div className='logo'>
            <div data-aos='zoom-in-right'>ArtJes</div>
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links: { url: string, text: string }, i: number) => (
              <Link
                key={i}
                to={links.url}
                onClick={() => scrollToSection(links.url.substring(1))}
                data-aos='zoom-in-left'
              >
                {links.text}
              </Link>
            ))}
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  );
};
