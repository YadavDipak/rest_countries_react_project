import Button from "./Button";

const BorderCountries = ({ borderCountries }) => {
  const renderBorderCountries = (countries) => {
    return countries.map((border) => {
      return (
        <Button classes="px-6" link={`/country/${border}`} key={border}>
          <p className="text-center w-full">{border}</p>
        </Button>
      );
    });
  };

  if (borderCountries) {
    return (
      <div className="mt-4 lg:col-span-2 grid gap:4">
        <p className="font-bold ">Border Countries:</p>
        <div className="flex flex-wrap mt-2 gap-x-4">
          {renderBorderCountries(borderCountries)}
        </div>
      </div>
    );
  }
};

export default BorderCountries;
