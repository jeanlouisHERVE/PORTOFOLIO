import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList";
import "./styles.scss";
import findImgByKey from "../../utils/img";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Projets Collectifs",
    },
    {
      id: "web",
      title: "Applications Web",
    },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div  key={d.id} className="item">
            <img
              src={findImgByKey(d.img)}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}