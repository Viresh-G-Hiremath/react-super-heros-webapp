import React from "react";
import { Link, useParams } from "react-router-dom";
import HeroAppearance from "../components/HeroAppearance";
import HeroBio from "../components/HeroBio";
import HeroConnections from "../components/HeroConnections";
import HeroImage from "../components/HeroImage";
import HeroPowerstats from "../components/HeroPowerstats";
import HeroWork from "../components/HeroWork";
import { useFetch } from "../hooks/useFetch";

export default function HeroDetails() {
  const { id } = useParams();
  const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;
  const { data: hero, isLoading } = useFetch(url);
  return (
    <div className="p-4">
      <h2 className="text-center mb-5">{hero.name}</h2>
      {isLoading && <div className="h4">Loading...</div>}

      <div className="container">
        <div className="row gap-2">
          <div className="col-sm-6 col-lg-4">
            <HeroImage slug={hero.slug} />
          </div>
          <div className="col">
            <div className="row gap-2">
              <div className="col">
                <HeroPowerstats id={id} />
              </div>
              <div className="col">
                <HeroAppearance id={id} />
              </div>
            </div>
            <div className="row gap-2">
              <div className="col-lg-6">
                <HeroBio id={id} />
              </div>
              <div className="col">
                <HeroWork id={id} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-lg-3">
          <div className="col">
            <HeroConnections id={id} />
          </div>
        </div>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
