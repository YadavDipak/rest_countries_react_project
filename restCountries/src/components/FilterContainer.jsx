import React, { useMemo } from "react";
import FilterByCountry from "./FilterByCountry"
import Filter from "./Filter";
import { useData } from "../context/DataContext";

const FilterContainer = () => {
    const { handleSearchInput, regionArray, handleRegionChange, } = useData();
    return (
        <section
            className="px-12 py-10 xl:py-10 xl:px-20 lg:px-12 grid grid-cols-1 lg:grid-cols-5 items-center gap-y-8 lg:gap-8"
        >
            {/* Search */}
            <FilterByCountry searchHandler={handleSearchInput} />
            {/* Filter Region */}

            <Filter
                title="Region"
                filterHandler={handleRegionChange}
                populateArray={regionArray}
            />

        </section>
    );
};
export default FilterContainer;