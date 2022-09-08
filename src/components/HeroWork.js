import { useFetch } from "../hooks/useFetch";

export default function HeroWork({ id }) {
  const { data } = useFetch(
    `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/work/${id}.json`
  );

  return (
    <div>
      <h5>Work</h5>
      <p>
        <span className="fw-semibold">Occupation: </span>
        {data.occupation} <br />
        <span className="fw-semibold">Base: </span>
        {data.base}
      </p>
    </div>
  );
}
