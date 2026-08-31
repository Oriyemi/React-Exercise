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
          "https://restcountries.com/v3.1/all"
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
  <div className="min-h-screen bg-gray-100 px-6 py-10">
    <div className="mx-auto max-w-7xl">
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Country Explorer
        </h1>
        <p className="mt-2 text-gray-600">
          Explore countries around the world
        </p>
      </div>

     
      <div className="mb-8 grid gap-4 rounded-xl bg-white p-5 shadow-sm md:grid-cols-3">
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="name">Name A-Z</option>
          <option value="population-high">
            Population: High to Low
          </option>
          <option value="population-low">
            Population: Low to High
          </option>
        </select>
      </div>

     
      {loading && (
        <div className="py-10 text-center">
          <p className="text-lg text-gray-600">
            Loading countries...
          </p>
        </div>
      )}

    
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
          {error}
        </div>
      )}

      
      {!loading && !error && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCountries.map((country) => (
            <div
              key={country.cca3}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
             
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="h-48 w-full object-cover"
              />

              
              <div className="p-5">
                <h2 className="mb-3 text-xl font-bold text-gray-900">
                  {country.name.common}
                </h2>

                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Region:
                    </span>{" "}
                    {country.region}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Capital:
                    </span>{" "}
                    {country.capital?.[0] || "No capital"}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Population:
                    </span>{" "}
                    {country.population.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      
      {!loading && !error && filteredCountries.length === 0 && (
        <div className="py-10 text-center">
          <p className="text-lg text-gray-500">
            No countries found.
          </p>
        </div>
      )}
    </div>
  </div>
);
}

export default CountryExp;