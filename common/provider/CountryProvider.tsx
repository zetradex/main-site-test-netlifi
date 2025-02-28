import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CountryContextProps {
  isLatamCountryBonuses: boolean;
  isIdMyCountryBonuses: boolean;
}

const CountryContext = createContext<CountryContextProps | undefined>(
  undefined
);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [isLatamCountryBonuses, setIsLatamCountryBonuses] = useState(false);
  const [isIdMyCountryBonuses, setIsIdMyCountryBonuses] = useState(false);
  const targetCountriesLatam = [
    "BR",
    "MX",
    "CO",
    "AR",
    "PE",
    "VE",
    "CL",
    "GT",
    "EC",
    "BO",
    "HT",
    "CU",
    "DO",
    "HN",
    "PY",
    "NI",
    "SV",
    "CR",
    "PA",
    "UY",
    "JM",
    "TT",
    "GY",
    "SR",
    "BZ",
    "BS",
    "BB",
    "LC",
    "GD",
    "VC",
    "AG",
    "DM",
    "KN",
  ];

  const targetCountriesIdMyUz = ["ID", "MY", "UZ"];

  useEffect(() => {
    window
      .fetch(window.location.href)
      .then((response) => {
        const countryCode = response.headers.get("X-CountryCode");

        console.log("countryCode: ", countryCode);

        if (targetCountriesLatam.includes(countryCode as string)) {
          setIsLatamCountryBonuses(true);
        }
        if (targetCountriesIdMyUz.includes(countryCode as string)) {
          setIsIdMyCountryBonuses(true);
        }
      })
      .catch((error) => console.error("Error fetching location data:", error));
  }, []);

  return (
    <CountryContext.Provider
      value={{
        isLatamCountryBonuses: isLatamCountryBonuses,
        isIdMyCountryBonuses: isIdMyCountryBonuses,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};
