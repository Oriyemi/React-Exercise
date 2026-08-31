// 28. Country explorer (REST Countries) — filter and sort
import React, { useEffect, useState } from "react";

function CountryExp() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [sort, setSort] = useState("name");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .filter((country) =>
      region === "all" ? true : country.region === region
    )
    .sort((a, b) => {
      if (sort === "name") {
        return a.name.common.localeCompare(b.name.common);
      }

      if (sort === "population-high") {
        return b.population - a.population;
      }

      if (sort === "population-low") {
        return a.population - b.population;
      }

      return 0;
    });

  return (
    <div>
      <h1>Country Explorer</h1>

      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="all">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="name">Name A-Z</option>
        <option value="population-high">Population: High to Low</option>
        <option value="population-low">Population: Low to High</option>
      </select>

      {loading && <p>Loading countries...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.cca3}>
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                width="200"
              />

              <h2>{country.name.common}</h2>

              <p>Region: {country.region}</p>

              <p>
                Capital: {country.capital?.[0] || "No capital"}
              </p>

              <p>
                Population: {country.population.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryExp;