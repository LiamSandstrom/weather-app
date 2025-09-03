import { getHour } from "./helpers";

export class UIManager {
  #weatherManager;
  #ui;

  constructor(ui, weatherManager) {
    this.#weatherManager = weatherManager;
    this.#ui = ui;
  }

  initialize(){
    this.#ui.bindSearch(this.search.bind(this));
  }

  async search(location) {
    this.#ui.fadeOut();
    await this.#weatherManager.getNewWeather(location).then((weatherObj) => {
      this.refresh(weatherObj);
      this.#ui.fadeIn();
    })
    .catch((e) => {
        this.#ui.fadeIn();
        alert("Valid city please.")
    })
  }

  refresh(weatherObj) {
    this.#ui.setLocation(weatherObj.location);
    this.#ui.setCurrentTemp(weatherObj.currentTemp);
    this.#ui.setHighest(weatherObj.tempMax);
    this.#ui.setLowest(weatherObj.tempMin);
    this.#ui.setIcon(weatherObj.icon);
    this.#ui.setBackground(weatherObj.icon);

    this.#ui.removeCards();
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
      this.#ui.fadeIn();
  }
}
