import ResourceData from "../data/resourceData";
import "./resource.css";
import { Link } from "react-router-dom";

export default function Resource() {
  return (
    <>
      <div className="relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {ResourceData.map((data, idx) => (
          <div key={idx} className="card">
            <span className="card__title">{data.title}</span>
            <p className="card__content">{data.about}</p>
            <Link to={data.url}>
              <button className="card__button">read docs</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
