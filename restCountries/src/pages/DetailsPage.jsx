import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { IoArrowBack } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { useData } from "../context/DataContext";
import { fetchCountryByCode } from "../services/fetchApi";

import Button from "../components/Button";
import Detail from "../components/Detail";

const Component = ({ country }) => {
  return (
    <>
      <Button classes="mb-4 mr-auto px-5" link={"/"}>
        <IoArrowBack className="mr-2 mt-1" /> Back
      </Button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-20">
        <img
          className="w-full sm:w-auto md:w-full md:h-80 md:col-span-2 lg:col-span-1 object-fill"
          src={country.flags.png}
          alt={`${country.name.common}-flag`}
        />
        <Detail country={country}></Detail>
      </div>
    </>
  );
};

const DetailsPage = () => {
  const { id } = useParams();
  const { badLoader } = useData();
  const [countryData, setCountryData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchCountryByCode(id)
      .then((data) => {
        if (Array.isArray(data)) setCountryData(data);
        else throw new Error("No Data");
      })
      .catch(() => {
        setCountryData("Country not found");
      });
  }, [id]);

  return (
    <section
      className={`${theme.mainBackground} ${theme.textColor} p-8 xl:p-20 text-center flex flex-col gap-6 min-h-screen`}
    >
      {countryData ? (
        typeof countryData !== "string" ? (
          <Component country={countryData[0]} />
        ) : (
          badLoader(countryData)
        )
      ) : (
        <FadeLoader
          color={`#324871`}
          height={30}
          margin={15}
          width={8}
          className="m-auto"
        />
      )}
    </section>
  );
};

export default DetailsPage;
