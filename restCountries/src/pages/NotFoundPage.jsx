import { IoArrowBack } from "react-icons/io5";
import { FaExclamationTriangle } from "react-icons/fa";
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";

const NotFoundPage = () => {
  const { textColor, mainBackground } = useTheme();

  return (
    <div>
      <section
        className={`${mainBackground} ${textColor} text-center flex flex-col justify-center items-center min-h-screen`}
      >
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Button link={`/`} classes={"px-5"}>
          {" "}
          <IoArrowBack className="mr-2 mt-1" /> Back
        </Button>
      </section>
    </div>
  );
};

export default NotFoundPage;
