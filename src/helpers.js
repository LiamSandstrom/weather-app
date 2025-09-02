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
      return "🌕";
    default:
      return text;
  }
}
