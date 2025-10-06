import TutorialData from "../data/tutorialsData";
import { Link } from "react-router-dom";
import "../css/tutorial.css";

export default function Tutorial() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {TutorialData.map((data, indx) => (
          <div className="Tcard ms-3" key={indx}>
            <div className="w-full h-50 overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src={data.image}
                alt="image"
              />
            </div>

            <span className="Tcard__title">{data.title}</span>
            <p className="Tcard__content">{data.about}</p>

            <Link to={data.url}>
              <button className="Tcard__button">view playlist</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
