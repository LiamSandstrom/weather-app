import "./styles.css";

class WeatherManager {
  #weather;

  constructor() {
    this.#weather = undefined;
  }

  async getWeather(location){
    const weatherJson= await this.#fetchWeather(location)
    const weatherObj = this.#processWeather(weatherJson);
    this.#setWeather(weatherObj)
    console.log(obj)
  }

  #processWeather(weather){
     const obj = {
        currentConditions : weather.currentConditions,
        hours : weather.days[0].hours,
        tempMax : weather.days[0].tempmax,
        tempMin : weather.days[0].tempmin,
        description : weather.days[0].description,
    };
    return obj;
  }

  async #fetchWeather(location) {
    if (this.#weather !== undefined) return this.#weather;

    const date = getCurrentDate();
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=QBJ37UJVDFD5XAB4TTL2K5QMC&unitGroup=uk`
    );
    if (response.status != 200) {
      console.error(response.statusText);
      throw new Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    return json;
  }

  #setWeather(newWeather) {
    this.#weather = newWeather;
  }
}

function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

const weatherManager = new WeatherManager();


//weatherManager.getWeather("stockholm")