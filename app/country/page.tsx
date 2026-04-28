"use client";

import { useState } from "react";
import { countryService } from "@/lib/services/countryService";

type Country = {
  name: {
    common: string;
  };
  capital?: string[];
  population: number;
  region: string;
  flags: {
    png: string;
  };
};

export default function CountryPage() {
  const [country, setCountry] = useState<string>("");
  const [data, setData] = useState<Country | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const searchCountry = async () => {
    try {
      setLoading(true);
      setError("");
      setData(null);

      const result: Country = await countryService.getCountry(country);
      setData(result);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">

        <h1 className="text-2xl font-bold mb-4">
          🌍 Country Info
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 p-2 border rounded-lg"
            placeholder="Enter country..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCountry(e.target.value)
            }
          />

          <button
            onClick={searchCountry}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {data && (
          <div className="mt-4">
            <img
              src={data.flags.png}
              className="w-28 mx-auto rounded-lg mb-2"
              alt="flag"
            />

            <h2 className="text-xl font-semibold">
              {data.name.common}
            </h2>

            <div className="text-left mt-3 bg-gray-100 p-3 rounded-lg">
              <p>🏙️ Capital: {data.capital?.[0]}</p>
              <p>👥 Population: {data.population.toLocaleString()}</p>
              <p>🌐 Region: {data.region}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}