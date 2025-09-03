import { getCurrentDate } from "./helpers";
import { getHour } from "./helpers";

export default class WeatherManager {
  #weather;
  #location;

  constructor() {
    this.#weather = undefined;
    this.#location = "";
  }

  async getNewWeather(location) {
    if (this.#location.toLowerCase() === location.toLowerCase())
      return this.#weather;

    const weatherJson = await this.#fetchWeather(location);
    const weatherObj = this.#processWeather(weatherJson);
    this.#setWeather(weatherObj);
    this.#setLocation(location);
    return this.#weather;
  }

  #processWeather(weather) {
    const obj = {
      currentTemp: weather.days[0].hours[getHour()].temp,
      location: weather.resolvedAddress,
      icon: weather.days[0].hours[getHour()].icon,
      hours: weather.days[0].hours,
      tempMax: weather.days[0].tempmax,
      tempMin: weather.days[0].tempmin,
      description: weather.days[0].description,
    };
    return obj;
  }

  async #fetchWeather(location) {
    const date = getCurrentDate();
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=QBJ37UJVDFD5XAB4TTL2K5QMC&unitGroup=uk`
    );
    if (response.status != 200) {
      console.error(response.statusText);
      throw new Error(response.statusText);
    }
    const json = await response.json();
    return json;
  }

  getWeather = () =>
    this.#weather != undefined ? this.#weather : "Weather not defined";

  #setWeather = (newWeather) => (this.#weather = newWeather);
  #setLocation = (newLocation) => (this.#location = newLocation);

  testWeather() {
    const weather = {
      location: "Sydney",
      days: [
        {
          icon: "sunny",
          tempmax: 30,
          tempmin: 17,
          description: "Sunny with clear skies",
          hours: Array.from({ length: 24 }, (_, i) => ({
            hour: i,
            temp: 17 + i * 0.5, // just some dummy temps
            icon: i < 12 ? "sunny" : "cloudy", // dummy icons
          })),
        },
      ],
    };
    return this.#processWeather(weather);
  }
}
