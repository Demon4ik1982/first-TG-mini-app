export interface IWeather {
  id:	number;
  name:	string;
  main: {
    temp: number,
  }
  weather: {
    0: {
      description: string,
      icon: string,
    };
  }

}

export type Weather = IWeather;
