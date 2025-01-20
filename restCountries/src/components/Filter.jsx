import React from "react";
import { useTheme } from "../context/ThemeContext";

const Filter = ({ title, filterHandler, populateArray }) => {
    const { theme } = useTheme()
    const populate = (data) => {
        if (data && Array.isArray(data)) {
            const selectRegionOptions = data.map((option) => (
                <option value={option} key={option}>{option}</option>
            ));
            return selectRegionOptions;
        }
    };
    return (
        <div
            className={`py-4 px-6 ${theme.subBackground} rounded-md w-3/4 md:w-full sm:w-1/2 lg:w-full justify-self-start sm:justify-self-center md:justify-self-start shadow-lg`}
        >
            <select
                title={title}
                className={`w-full ${theme.subBackground}`}
                name="Filter By Region"
                id={title}
                defaultValue=""
                onChange={filterHandler}
            >
                <option value="" className="bg-black">
                    {`By ${title}`}
                </option>
                {populate(populateArray)}
            </select>
        </div>
    );
};

export default Filter;
