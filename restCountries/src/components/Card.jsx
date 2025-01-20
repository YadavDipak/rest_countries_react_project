import React from 'react'
import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

const Card = ({ country }) => {
    const { theme } = useTheme();

    const renderSubRegion = (value) => value && (
        <p className="text-sm">
            <span className="font-bold">Sub Region : </span>
            {value}
        </p>
    );

    const renderCapital = (value) => value && (
        <p className="text-sm">
            <span className="font-bold">Capital : </span>
            {value.join(', ')}
        </p>
    );

    return (
        <Link className={`${theme.subBackground} rounded-md box-border h-auto overflow-hidden shadow-lg w-64 justify-self-center`}
            to={`/country/${country.cca3}`}>
            <img
                src={country.flags.png}
                alt={`${country.name.common}-flag`}
                className="w-full h-44 object-fill"
            />

            <div className="p-6">
                <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
                <p className="text-sm">
                    <span className="font-bold">Population : </span>
                    {country.population}
                </p>
                <p className="text-sm">
                    <span className="font-bold">Region : </span>
                    {country.region}
                </p>
                {renderSubRegion(country.subregion)}
                {renderCapital(country.capital)}
            </div>
        </Link>
    );

}

export default Card