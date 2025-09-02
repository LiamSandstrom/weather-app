import { capitalize } from "./helpers";
import { getIcon } from "./helpers";

export default class UI {
  #location;
  #tempCurr;
  #tempMax;
  #tempMin;
  #description;
  #icon;
  #hoursContainer;
  #wrapper;

  constructor() {
    this.#location = document.querySelector("#weather-now-location");
    this.#tempCurr = document.querySelector("#weather-now-temp");
    this.#tempMax = document.querySelector("#weather-now-high");
    this.#tempMin = document.querySelector("#weather-now-low");
    this.#description = document.querySelector("#description");
    this.#icon = document.querySelector("#weather-now-icon");
    this.#hoursContainer = document.querySelector(".hours");
    this.#wrapper = document.querySelector(".wrapper");
  }

  setLocation(location) {
    this.#location.textContent = capitalize(location);
  }

  setCurrentTemp(temp) {
    this.#tempCurr.textContent = this.addTempSign(temp);
  }

  setHighest(tempMax) {
    this.#tempMax.textContent = "H:" + this.addTempSign(tempMax);
  }

  setLowest(tempMin) {
    this.#tempMin.textContent = "L:" + this.addTempSign(tempMin);
  }

  setDescription(description) {
    this.#description.textContent = description;
  }

  setIcon(icon) {
    this.#icon.textContent = getIcon(icon);
  }

  addTempSign(text) {
    return text + "°";
  }

  createCard(hour, hourIcon, hourTemp) {
    const container = document.createElement("div");
    container.classList.add("hour");

    const time = document.createElement("p");
    time.textContent = this.formatHour(hour);
    container.appendChild(time);

    const icon = document.createElement("p");
    icon.textContent = getIcon(hourIcon);
    container.appendChild(icon);

    const temp = document.createElement("p");
    temp.textContent = this.addTempSign(hourTemp);
    container.appendChild(temp);

    this.#hoursContainer.appendChild(container);
  }

  formatHour(hour) {
    if (hour < 10) {
      return `0${hour}:00`;
    } else {
      return `${hour}:00`;
    }
  }

  fadeOut() {
    this.#wrapper.style.opacity = "0%";
  }
  fadeIn() {
    this.#wrapper.style.opacity = "100%";
  }
}
