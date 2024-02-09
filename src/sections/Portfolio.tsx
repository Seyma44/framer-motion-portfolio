import React, { useState } from "react";
import  Heading  from "../components/common/Heading";
import { portfolio } from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

interface PortfolioItem {
  id: number;
  cover: string;
  name: string;
  category: string;
  title: string;
}

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

export const Portfolio: React.FC = () => {
  const [list, setLists] = useState<PortfolioItem[]>(portfolio);

  const filterItems = (selectedCategory: string) => {
    const newItems = portfolio.filter((item) => item.category === selectedCategory);
    setLists(newItems);
    if (selectedCategory === "all") {
      setLists(portfolio);
    }
  };

  return (
    <>
      <article>
        <div className='container' id="portfolio">
          <Heading title='Portfolio' />
          <div className='catButton'>
            {allCategory.map((category) => (
              <button
                key={category}
                className='primaryBtn'
                onClick={() => filterItems(category)}
                data-aos='zoom-out-down'
              >
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' key={item.id} data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
