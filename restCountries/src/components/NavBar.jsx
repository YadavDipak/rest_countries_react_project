import { Link } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const { theme, toggleMode } = useTheme();

  return (
    <>
      <nav
        className={`flex justify-between ${theme.subBackground} ${theme.textColor} md:px-20 px-10 py-6 shadow-sm`}
        key="navbar-section"
      >
        <Link to="/">
          <h1 className="text-xl font-bold md:text-2xl">Where in the world?</h1>
        </Link>
        <button type="button" className="text-lg" onClick={toggleMode}>
          <IoMoonOutline className="inline mb-1 mr-1" /> Dark Mode
        </button>
      </nav>
    </>
  );
};

export default NavBar;
