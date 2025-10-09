import "./resource.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Resource() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        axios
          .get("http://127.0.0.1:8000/allResources", { withCredentials: true })
          .then((res) => setData(res.data));
      } catch (e) {
        alert("opps! cant fetch resources");
        navigate("/");
        console.log("can't fetch resources:", e);
      }
    };
    fetchResource();
  }, [navigate]);
  return (
    <>
      <div className="relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data.map((data, idx) => (
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
