export function getTimeFromUnix(unixTime) {
  if (!unixTime) return "";
  // Преобразование Unix-времени в миллисекунды
  const date = new Date(unixTime * 1000);

  // Форматирование времени в 12-часовом формате
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Преобразование времени в 12-часовой формат
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Преобразование в 12-часовой формат
  const formattedMinutes = minutes.toString().padStart(2, "0"); // Дополнение нулями до двух цифр

  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  return formattedTime;
}

// Data for TodayWeather block
export function formatTodayWeatherDate(data) {
  if (!data) return false;

  const todayDate = data.list[0];

  const temp = Math.round(todayDate.main.temp) || "";
  const feelsLike = Math.round(todayDate.main["feels_like"]) || "";
  const sunrise = getTimeFromUnix(data.city.sunrise) || "";
  const sunset = getTimeFromUnix(data.city.sunset) || "";
  const windSpeed = Math.round(todayDate.wind.speed) + "km/h" || "";
  const windDeg = todayDate.wind.deg || "";
  const pressure = todayDate.main.pressure + "hPa" || "";
  const humidity = todayDate.main.humidity + "%" || "";

  const clouds = todayDate.clouds.all || "";
  const rain = todayDate.rain ? true : false;

  let weatherState;

  if (clouds < 11) weatherState = "Sunny";
  if (clouds > 10 && clouds < 75) weatherState = "Cloudy";
  if (clouds > 74) weatherState = "Overcast";
  if (rain) weatherState = "Rain";

  return {
    temp,
    feelsLike,
    sunrise,
    sunset,
    sunset,
    clouds,
    pressure,
    humidity,
    weatherState,
    windSpeed,
    windDeg,
  };
}
