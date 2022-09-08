import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function HerosList({ query }) {
  const [heros, setHeros] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading } = useFetch(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );

  useEffect(() => {
    if (query) {
      const values = [];
      data.forEach((hero) => {
        if (hero.name.toLowerCase().includes(query)) {
          values.push(hero);
        }
      });
      setHeros(values.slice(0, pageSize));
    } else {
      setHeros(data.slice(0, pageSize));
    }
  }, [data, query, pageSize]);

  return (
    <div className="p-3">
      {isLoading && <div className="h4">Loading...</div>}
      <div className="row gap-2 d-flex justify-content-center m-0">
        {heros.map((hero) => (
          <div
            key={hero.id}
            className="card text-center"
            style={{ width: "16rem" }}
          >
            <img src={hero.images.lg} className="card-img-top pt-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Name: {hero.name}</h5>
              <h6 className="card-text">Powerstats</h6>
              <p>
                Intelligence: {hero.powerstats.intelligence} <br />
                Strength: {hero.powerstats.strength} <br />
                Speed: {hero.powerstats.speed} <br />
                Durability: {hero.powerstats.durability} <br />
                Power: {hero.powerstats.power} <br />
                Combat: {hero.powerstats.combat}
              </p>

              <Link to={`/HeroDetails/${hero.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {heros.length >= pageSize && (
        <button
          className="btn btn-primary d-flex ms-auto me-5 my-3"
          onClick={() => setPageSize(pageSize + 10)}
        >
          Load More...
        </button>
      )}
    </div>
  );
}
