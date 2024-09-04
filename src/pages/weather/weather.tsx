import { useEffect, useState } from "react";
import Api from "../../api/api";
import { Weather } from "../../models/weather";
import "./weather.css"

export const WeatherApp = () => {
  const [weather, setWeather] = useState<Weather>();

  const getWeather = async (): Promise<void> => {
    const data = await Api.getWeather();
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (weather !== undefined) {
    return (
      <>
      <div className="weather">
        <h1 className="weather__title">Погода в городе</h1>
        <p className="weather__name-city">{`${weather.name}`}</p>
        <p className="weather__temp">Температура воздуха: {Math.round(weather.main.temp - 273)}&deg;</p>
        <p className="weather__description">{weather.weather[0].description}</p>
        <img className="weather__icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />

      </div>
      </>
    );
  }
};
