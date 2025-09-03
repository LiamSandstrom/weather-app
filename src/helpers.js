export function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

export function getHour() {
  return new Date().getHours();
}

export function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

export function getIcon(text) {
  switch (text) {
    case "snow":
      return "❄️";
    case "rain":
      return "🌧️";
    case "fog":
      return "☁️";
    case "wind":
      return "💨";
    case "cloudy":
      return "☁️";
    case "partly-cloudy-day":
      return "🌥️";
    case "partly-cloudy-night":
      return "🌘";
    case "clear-day":
      return "☀️";
    case "clear-night":
      return "🌘";
    default:
      return text;
  }
}

export function getBackground(weather) {
  switch (weather) {
    case "snow":
      return "linear-gradient(320deg,rgba(36, 87, 107, 1) 6%, rgba(129, 184, 202, 1) 74%, rgba(69, 206, 218, 1) 100%)"; 
    case "rain":
      return "linear-gradient(320deg,rgba(22, 42, 50, 1) 6%, rgba(30, 74, 89, 1) 74%, rgba(44, 62, 77, 1) 100%)"; 
    case "fog":
      return "linear-gradient(to top, #69767fff, #585e65ff)"; 
    case "wind":
      return "linear-gradient(320deg,rgba(55, 107, 128, 1) 6%, rgba(106, 180, 205, 1) 74%, rgba(255, 255, 255, 1) 100%)"; 
    case "cloudy":
      return "linear-gradient(to top, #304352, #565655ff)"; 
    case "partly-cloudy-day":
      return "linear-gradient(320deg,rgba(55, 107, 128, 1) 6%, rgba(106, 180, 205, 1) 74%, rgba(255, 255, 255, 1) 100%)"; 
    case "partly-cloudy-night":
      return "linear-gradient(to top, #2d3135ff, #545a6fff)"; 
    case "clear-day":
      return "linear-gradient(320deg,rgba(87, 164, 195, 1) 6%, rgba(111, 188, 213, 1) 74%, rgba(255, 255, 255, 1) 100%)"; 
    case "clear-night":
      return "linear-gradient(to top, #213036ff, #2c5364)"; 
    default:
      return "linear-gradient(to top, #213036ff, #2c5364)"; 
  }
}