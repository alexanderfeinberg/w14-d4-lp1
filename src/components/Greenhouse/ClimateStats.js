import "./ClimateStats.css";
import { useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from "react";

function ClimateStats() {
  const { temperature, humidity, actualTemp } = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">Temperature {actualTemp}°F</div>
      <div className="humidity">Humidity {humidity}%</div>
    </div>
  );
}

export default ClimateStats;
