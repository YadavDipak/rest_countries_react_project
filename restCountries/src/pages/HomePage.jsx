import Cards from "../components/Cards";
import { useTheme } from "../context/ThemeContext";
import FilterContainer from "../components/FilterContainer";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme.mainBackground} ${theme.textColor} font-sans min-h-screen`}
    >
      <FilterContainer />
      <Cards />
    </div>
  );
};

export default HomePage;
