import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  angularPortfolio,
  reactJsPortfolio,
  figmaPortfolio,
  nodejsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "angular",
      title: "Angular Apps",
    },
    {
      id: "reactJs",
      title: "React.JS App",
    },
    {
      id: "figma",
      title: "Figma Design",
    },
    {
      id: "nodejs",
      title: "Node.JS",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "angular":
        setData(angularPortfolio);
        break;
      case "reactJs":
        setData(reactJsPortfolio);
        break;
      case "figma":
        setData(figmaPortfolio);
        break;
      case "nodejs":
        setData(nodejsPortfolio);
        break;
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
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a
            {...(d.hasLink && 'target = "_blank"')}
            href={d.link}
            rel="noreferrer"
            key={d.id + d.title}
          >
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
