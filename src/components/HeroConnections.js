import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HeroConnections({ id }) {
  const { data } = useFetch(
    `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/connections/${id}.json`
  );

  return (
    <div>
      <h5>Connections</h5>
      <p>
        <span className="fw-semibold">Group Affiliation: </span>
        {data.groupAffiliation} <br />
        <span className="fw-semibold">Relatives: </span>
        {data.relatives}
      </p>
    </div>
  );
}
