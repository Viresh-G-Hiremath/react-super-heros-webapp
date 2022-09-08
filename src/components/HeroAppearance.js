import { useFetch } from "../hooks/useFetch";
export default function HeroAppearance({ id }) {
  const { data } = useFetch(
    `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/appearance/${id}.json`
  );
  return (
    <div>
      <h5>Appearance</h5>
      <p>
        <span className="fw-semibold">Gender: </span>
        {data.gender} <br />
        <span className="fw-semibold">Race: </span>
        {data.race} <br />
        <span className="fw-semibold">Height: </span>
        {data.height && data.height[0]} <br />
        <span className="fw-semibold">Weight: </span>
        {data.weight && data.weight[1]} <br />
        <span className="fw-semibold">Eye Color: </span>
        {data.eyeColor} <br />
        <span className="fw-semibold">Hair Color: </span>
        {data.hairColor}
      </p>
      <p></p>
    </div>
  );
}
