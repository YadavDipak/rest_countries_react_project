/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { fetchCountries } from "../services/fetchApi";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [countryData, setCountryData] = useState("");
  const regionArray = Array.isArray(countryData)
    ? Array.from(new Set(countryData.map((country) => country.region)))
    : [];

  const [region, setRegion] = useState(null);
  const [countryName, setCountryName] = useState(null);

  const filterCards = (countryData) => {
    if (!Array.isArray(countryData) || countryData.length === 0) {
      return countryData;
    }
    let filteredData = countryData;

    if (countryName) {
      filteredData = filteredData.filter((country) =>
        country.name.common.toLowerCase().startsWith(countryName.toLowerCase())
      );
    }

    if (region) {
      filteredData = filteredData.filter(
        (country) => country.region === region
      );
    }

    return filteredData;
  };

  const badLoader = (message) => (
    <div className="error bg-red text-white p-4 rounded-md text-center">
      {message}
    </div>
  );

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        if (data.length === 0) {
          setCountryData("No data available");
        } else {
          setCountryData(data);
        }
      })
      .catch(() => {
        setCountryData("Failed to load data. Please try again later.");
      });
  }, []);

  const finalOutput = filterCards(countryData);

  return (
    <DataContext.Provider
      value={{
        badLoader,
        regionArray,
        region,
        handleRegionChange: (event) => setRegion(event.target.value),
        handleSearchInput: (event) => setCountryName(event.target.value),
        finalOutput,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
