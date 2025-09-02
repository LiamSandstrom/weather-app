import "./styles.css";
import WeatherManager from "./weather-Manager";
import { UIManager } from "./ui-manager";
import UI from "./ui";
import "dragscroll"


const ui = new UI();
const weatherManager = new WeatherManager();
const uiManager = new UIManager(ui, weatherManager)

uiManager.search("stockholm")
//uiManager.testSearch();


  