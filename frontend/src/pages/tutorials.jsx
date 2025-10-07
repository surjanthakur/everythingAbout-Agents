import TutorialData from "../data/tutorialsData";
import { Link } from "react-router-dom";
import "./tutorial.css";

export default function Tutorial() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {TutorialData.map((data, indx) => (
          <div className="Tcard" key={indx}>
            <div className="w-full h-52 overflow-hidden rounded-md"></div>

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
