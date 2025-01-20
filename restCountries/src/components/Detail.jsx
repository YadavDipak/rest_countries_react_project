import React from "react";
import BorderCountries from "../components/BorderCountries";

const Detail = ({ country }) => {
    const renderSubRegion = (value) => value && (
        <p>
            <span className="font-bold">Sub Region : </span>
            {value}
        </p>
    );
    const renderCapital = (value) => value && (
        <p>
            <span className="font-bold">Capital : </span>
            {value.join(', ')}
        </p>
    );
    return (
        <div className=" text-left">
            <h2 className="text-2xl font-bold mb-2">
                {country.name.common}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 justify-between">
                <div>
                    <p>
                        <span className="font-bold">Official Name : </span>
                        {country.name.official}
                    </p>
                    <p>
                        <span className="font-bold">Population : </span>
                        {country.population}
                    </p>
                    <p>
                        <span className="font-bold">Region : </span>{" "}
                        {country.region}
                    </p>
                    {renderSubRegion(country.subregion)}
                    {renderCapital(country.capital)}
                </div>
                <div>
                    <p>
                        <span className="font-bold">Top Level Domain : </span>
                        {country.tld}
                    </p>
                    <p>
                        <span className="font-bold">Currencies : </span>{" "}
                        {Object.values(country.currencies)
                            .map((currency) => currency.name)
                            .join(", ")}
                    </p>
                    <p>
                        <span className="font-bold">Languages : </span>{" "}
                        {Object.values(country.languages)
                            .map((language) => language)
                            .join(", ")}
                    </p>
                </div>
            </div>
            <BorderCountries borderCountries={country.borders} />
        </div>
    );
};
export default Detail;