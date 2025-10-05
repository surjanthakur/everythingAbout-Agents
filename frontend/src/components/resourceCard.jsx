import "../css/resource.css";
import { Link } from "react-router-dom";

export default function Card({ title, about, url }) {
  return (
    <>
      <div className="card ms-3">
        <span className="card__title">{title}</span>
        <p className="card__content">{about}</p>
        <Link to={url}>
          <button className="card__button">read docs</button>
        </Link>
      </div>
    </>
  );
}
