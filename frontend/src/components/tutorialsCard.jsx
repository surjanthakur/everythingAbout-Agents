import { Link } from "react-router-dom";
import "../css/tutorial.css";

export default function Card({ title, about, image, url }) {
  return (
    <div className="Tcard ms-3">
      <div className="w-full h-50 overflow-hidden ">
        <img className="w-full h-full object-cover" src={image} alt="image" />
      </div>

      <span className="Tcard__title">{title}</span>
      <p className="Tcard__content">{about}</p>

      <Link to={url}>
        <button className="Tcard__button">view playlist</button>
      </Link>
    </div>
  );
}
