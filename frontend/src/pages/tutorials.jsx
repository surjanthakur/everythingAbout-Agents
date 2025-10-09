import { Link, useNavigate } from "react-router-dom";
import "./tutorial.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Tutorial() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // fetch all tutorials
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        await axios
          .get("http://127.0.0.1:8000/allTutorials", { withCredentials: true })
          .then((res) => setData(res.data));
      } catch (e) {
        alter("opps! ⚠️ can't fetch tutorials");
        navigate("/");
        console.log("cant fetch tutorials:", e);
      }
    };
    fetchTutorials();
  }, [navigate]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data.map((data, indx) => (
          <div className="Tcard" key={indx}>
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
