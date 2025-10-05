import "../css/resource.css";
import { Link } from "react-router-dom";

export default function Card({ title, about, url }) {
  return (
    <>
      <div class="card">
        <span class="card__title">{title}</span>
        <p class="card__content">{about}</p>
        <Link to={url}>
          <button class="card__button">read docs</button>
        </Link>
      </div>
    </>
  );
}
