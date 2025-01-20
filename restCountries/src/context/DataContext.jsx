import { createContext, useState, useContext, useEffect } from "react";
// import Card from "../components/Card";


const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // Data from fetching the API
    const [countryData, setCountryData] = useState("");

    // populate region array
    const regionArray = Array.isArray(countryData) ? Array.from(new Set(countryData.map(country => country.region))) : [];

    // Data from search input and filter
    const [region, setRegion] = useState(null);
    const [countryName, setCountryName] = useState(null);

    // Function to filter cards based on search input and filter
    const filterCards = (countryData) => {
        console.log(Array.isArray(countryData))
        console.log(countryData.length)
        if (!Array.isArray(countryData) || countryData.length === 0) {
            return countryData;
        }
        console.log(typeof countryData)
        let filteredData = countryData;

        if (countryName) {
            filteredData = filteredData.filter((country) =>
                country.name.common
                    .toLowerCase()
                    .startsWith(countryName.toLowerCase())
            );
        }

        if (region) {
            filteredData = filteredData.filter(
                (country) => country.region === region
            );
        }

        return filteredData;
    }

    // Function to display error message
    const badLoader = (message) => (
        <div className="error bg-red text-white p-4 rounded-md text-center">{message}</div>
    );

    // Fetch data from API
    useEffect(() => {
        const url = "https://restcountries.com/v3.1/all";
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("API failed to load");
                }
                return response.json();
            })
            .then((data) => {
                if (data.length === 0) {
                    setCountryData("No data available");
                } else {
                    setCountryData(data);
                }
            })
            .catch((error) => {
                console.error(error);
                setCountryData("Failed to load data. Please try again later.")
            }
            );
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
                finalOutput, // Keep this key
            }}
        >
            {children}
        </DataContext.Provider>

    );
};

export const useData = () => useContext(DataContext);
