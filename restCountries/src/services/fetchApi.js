const API = import.meta.env.VITE_API_URL;

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${API}/all`);
    if (!response.ok) {
      throw new Error("API failed to load");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to load data. Please try again later.");
  }
};

export const fetchCountryByCode = async (code) => {
  try {
    const response = await fetch(`${API}/alpha/${code}`);
    if (!response.ok) {
      throw new Error("Country not found");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch country details.");
  }
};
