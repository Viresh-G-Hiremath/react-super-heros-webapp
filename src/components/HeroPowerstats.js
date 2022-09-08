import { useFetch } from "../hooks/useFetch";

export default function HeroPowerstats({ id }) {
  const { data } = useFetch(
    `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/powerstats/${id}.json`
  );

  return (
    <div>
      <h5>Powerstats</h5>
      <p>
        <span className="fw-semibold">Intelligence: </span>
        {data.intelligence} <br />
        <span className="fw-semibold">Strength: </span>
        {data.strength} <br />
        <span className="fw-semibold">Speed: </span>
        {data.speed} <br />
        <span className="fw-semibold">Durability: </span>
        {data.durability} <br />
        <span className="fw-semibold">Power: </span>
        {data.power} <br />
        <span className="fw-semibold">Combat: </span>
        {data.combat}
      </p>
    </div>
  );
}
