import { FaMagnifyingGlass } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const FilterByCountry = ({ searchHandler }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`py-4 px-6 md:px-8 ${theme.subBackground} justify-self-start w-full xl:w-2/3 rounded-md md:col-span-2 shadow-lg flex`}
    >
      <FaMagnifyingGlass className="mr-2 mt-1" />
      <input
        className={`${theme.subBackground} focus:${theme.subBackground} outline-none border-none w-full`}
        id="filter"
        type="text"
        placeholder="Search for a country..."
        onChange={searchHandler}
      />
    </div>
  );
};

export default FilterByCountry;
