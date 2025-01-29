import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useData } from "../context/DataContext";

const Button = ({ children, classes, link }) => {
  const { setCountryID, setCountryName, setRegion } = useData();
  const { theme } = useTheme();
  const handleClick = () => {
    setCountryID(null);
    setCountryName(null);
    setRegion(null);
  };

  return (
    <Link
      to={link}
      onClick={handleClick}
      className={` ${theme.subBackground} ${theme.textColor} ${classes} hover:bg-gray-400 hover:text-black rounded-md py-2 mt-4 shadow-lg font-semibold flex`}
    >
      {children}
    </Link>
  );
};

export default Button;
