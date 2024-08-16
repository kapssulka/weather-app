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

// Formatted Data for TodayWeather block
export function formatTodayWeatherDate(data) {
  if (!data) return false;

  const todayDate = data.list[0];

  const temp = Math.round(todayDate.main.temp) || "";
  const feelsLike = Math.round(todayDate.main["feels_like"]) || "";
  const sunrise = getTimeFromUnix(data.city.sunrise) || "";
  const sunset = getTimeFromUnix(data.city.sunset) || "";
  const windSpeed = Math.round(todayDate.wind.speed) + "m/s" || "";
  const windDeg = todayDate.wind.deg || "";
  const pressure = todayDate.main.pressure + "hPa" || "";
  const humidity = todayDate.main.humidity + "%" || "";

  const clouds = todayDate.clouds.all || "";
  const rain = todayDate.rain ? true : false;

  const weatherState = setWeatherState(clouds, rain);

  return {
    temp,
    feelsLike,
    sunrise,
    sunset,
    sunset,
    pressure,
    humidity,
    weatherState,
    windSpeed,
    windDeg,
  };
}

// Formatted Data for TodayWeather block
export function formatDaysForecastDate(data) {
  if (!data) return false;

  const nextDaysWeather = filterWeatherData(data.list);

  const formatDataNextDaysWeather = [];

  for (let i = 0; i < nextDaysWeather.length; i++) {
    const clouds = nextDaysWeather[i].clouds.all || "";
    const rain = nextDaysWeather[i].rain ? true : false;

    const unixTime = nextDaysWeather[i].dt * 1000;

    const value = {
      temp: Math.round(nextDaysWeather[i].main.temp),
      date: getDayOfTheWeek(unixTime),
      weatherState: setWeatherState(clouds, rain),
    };

    formatDataNextDaysWeather.push(value);
  }

  return formatDataNextDaysWeather;
}

// Formatted Data for HourlyForecast block
export function formatHourlyForecastDate(data) {
  if (!data) return false;

  const todayWeatherdate = filterWeatherData(data.list, true);

  const formatedTodayWeatherdate = [];

  for (let i = 0; i < todayWeatherdate.length; i++) {
    const unixTime = extractTime(todayWeatherdate[i].dt_txt);
    const temp = Math.round(todayWeatherdate[i].main.temp);
    const windDeg = todayWeatherdate[i].wind.deg;
    const windSpeed = Math.round(todayWeatherdate[i].wind.speed);

    const clouds = todayWeatherdate[i].clouds.all || "";
    const rain = todayWeatherdate[i].rain ? true : false;
    const weatherState = setWeatherState(clouds, rain);

    const value = { unixTime, temp, windDeg, windSpeed, weatherState };

    formatedTodayWeatherdate.push(value);
  }

  return formatedTodayWeatherdate;
}

// Format search request
export function formatSearchRequest(string) {
  return string;
}

//? Helpers
function setWeatherState(clouds = 0, rain = false) {
  let weatherState;

  if (clouds < 11) weatherState = "Sunny";
  if (clouds > 10 && clouds < 75) weatherState = "Cloudy";
  if (clouds > 74) weatherState = "Overcast";
  if (rain) weatherState = "Rain";

  return weatherState;
}

function filterWeatherData(data, onlyToday = false, maxDay = 5) {
  // Брать ли в сортировку текущий день
  const helpNum = onlyToday ? 0 : 1;

  const dateToday = new Date().getUTCDate();

  const nextDaysWeatherDate = [];

  for (let i = dateToday + helpNum; i <= dateToday + maxDay; i++) {
    let filterArr = data.filter(
      (item) => new Date(item.dt * 1000).getUTCDate() === i
    );

    if (onlyToday) return filterArr;

    const medianaIndex = Math.floor(filterArr.length / 2);
    nextDaysWeatherDate.push(filterArr[medianaIndex]);
    filterArr = [];
  }

  return nextDaysWeatherDate;
}

function getDayOfTheWeek(unixTime) {
  const day = new Date(unixTime).getUTCDay();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return daysOfWeek[day];
}

// Format time
function extractTime(date) {
  // Используем регулярное выражение для извлечения времени
  const timeMatch = date.match(/\d{2}:\d{2}/);

  if (timeMatch) return timeMatch[0];
  return "XX:XX";
}
