import { getHour } from "./helpers";

getHour;

export class UIManager {
  #weatherManager;
  #ui;
  constructor(ui, weatherManager) {
    this.#weatherManager = weatherManager;
    this.#ui = ui;
  }

  async search(location) {
    this.#ui.fadeOut();
    await this.#weatherManager.getNewWeather(location).then((weatherObj) => {
      this.refresh(weatherObj);
      this.#ui.fadeIn();
    });
  }

  refresh(weatherObj) {
    this.#ui.setLocation(weatherObj.location);
    this.#ui.setCurrentTemp(weatherObj.currentTemp);
    this.#ui.setHighest(weatherObj.tempMax);
    this.#ui.setLowest(weatherObj.tempMin);
    this.#ui.setIcon(weatherObj.icon);
    console.log(getHour());

    for (let i = getHour(); i < weatherObj.hours.length; i++) {
      this.#ui.createCard(
        i,
        weatherObj.hours[i].icon,
        weatherObj.hours[i].temp
      );
    }
  }

  testSearch(location) {
    this.refresh(this.#weatherManager.testWeather());
  }
}
