import HerosList from "../components/HerosList";
import Search from "../components/Search";
import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <h1 className="text-center py-4">Super Heros</h1>
      <Search setQuery={setQuery} />
      <HerosList query={query} />
    </div>
  );
}
