import { capitalize } from "./helpers";
import { getIcon } from "./helpers";
import { getBackground } from "./helpers";
import logo from "./searchIcon.svg";

export default class UI {
  #location;
  #tempCurr;
  #tempMax;
  #tempMin;
  #description;
  #icon;
  #hoursContainer;
  #wrapper;
  #searchIcon;
  #searchField;
  #background;

  constructor() {
    this.#location = document.querySelector("#weather-now-location");
    this.#tempCurr = document.querySelector("#weather-now-temp");
    this.#tempMax = document.querySelector("#weather-now-high");
    this.#tempMin = document.querySelector("#weather-now-low");
    this.#description = document.querySelector("#description");
    this.#icon = document.querySelector("#weather-now-icon");
    this.#hoursContainer = document.querySelector(".hours");
    this.#wrapper = document.querySelector(".wrapper");
    this.#searchIcon = document.querySelector("#search-icon");
    this.#searchField = document.querySelector("#search-field");
    this.#background = document.body;
  }

  initialize() {
    this.setSearchIcon(logo);
  }

  setSearchIcon(icon) {
    this.#searchIcon.src = icon;
  }

  bindSearch(handler) {
    this.#searchIcon.addEventListener("click", () => {
      handler(this.#getSearchLocation());
    });

    this.#searchField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handler(this.#getSearchLocation());
      }
    });
  }

  #getSearchLocation() {
    return this.#searchField.value;
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

  setBackground(icon){
    this.#background.style.background = getBackground(icon)
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

  removeCards(){
    this.#hoursContainer.innerHTML = ""
  }

  formatHour(hour) {
    if (hour < 10) {
      return `0${hour}:00`;
    } else {
      return `${hour}:00`;
    }
  }

  fadeOut() {
    this.#wrapper.style.transition = "opacity 0.1s"
    this.#wrapper.style.opacity = "0%";
  }
  fadeIn() {
    this.#wrapper.style.transition = "opacity 1s"
    this.#wrapper.style.opacity = "100%";
  }
}
