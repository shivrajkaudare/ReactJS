import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Dlehi",
    feelsLike: 24.84,
    humidity: 84,
    temp: 24.17,
    tempMax: 24.17,
    tempMin: 24.17,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="WeatherApp">
      <h2>Weather App By Shivraj </h2>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
