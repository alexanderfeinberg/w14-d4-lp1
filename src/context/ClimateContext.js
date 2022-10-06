// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState, useEffect } from "react";
export const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  const [actualTemp, setActualTemp] = useState(45);

  useEffect(() => {
    let myTimeout;
    if (actualTemp !== temperature) {
      myTimeout = setTimeout(() => {
        setActualTemp(actualTemp + 1);
      }, 1000);
    }

    return () => {
      clearInterval(myTimeout);
    };
  }, [actualTemp]);

  return (
    <ClimateContext.Provider
      value={{ temperature, setTemperature, humidity, setHumidity, actualTemp }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
