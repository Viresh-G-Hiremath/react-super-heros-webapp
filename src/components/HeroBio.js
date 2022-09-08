import { useFetch } from "../hooks/useFetch";

export default function HeroBio({ id }) {
  const { data } = useFetch(
    `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/biography/${id}.json`
  );

  return (
    <div>
      <h5>Biography</h5>
      <p>
        <span className="fw-semibold">FullName: </span>
        {data.fullName ? data.fullName : "Full name not found"} <br />
        <span className="fw-semibold">Alter Egos: </span>
        {data.alterEgos} <br />
        <span className="fw-semibold">Aliases: </span>
        {data.aliases && data.aliases.map((a) => a + ", ")} <br />
        <span className="fw-semibold">Place Of Birth: </span>
        {data.placeOfBirth} <br />
        <span className="fw-semibold">First Appearance: </span>
        {data.firstAppearance} <br />
        <span className="fw-semibold">Publisher: </span>
        {data.publisher} <br />
        <span className="fw-semibold">Alignment: </span>
        {data.alignment}
      </p>
    </div>
  );
}
