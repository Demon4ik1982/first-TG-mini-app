import { Weather } from "../models/weather";

export const getWeather = async (): Promise<Weather> => {
  const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=498817&lang=ru&appid=056b499455952900069f6a5d4e1aa450`);
  const weather = await responce.json();

  return weather;
};
