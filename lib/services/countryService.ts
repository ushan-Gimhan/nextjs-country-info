const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export type Country = {
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

export const countryService = {
  async getCountry(name: string): Promise<Country> {
    const res = await fetch(`${BASE_URL}/name/${name}`);

    if (!res.ok) {
      throw new Error("Country not found");
    }

    const data: Country[] = await res.json();

    return data[0];
  },
};