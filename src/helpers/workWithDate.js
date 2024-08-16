import moment from "moment-timezone";

export function getTimeByCity(cityName) {
  // Используем временную зону по названию города
  const timeZone = moment.tz.names().find((zone) => zone.includes(cityName));

  if (!timeZone) return "XX:XX";

  // Получаем текущее время в указанной временной зоне
  const time = moment().tz(timeZone).format("HH:mm");
  return time;
}

// Функция для получения времени по названию города
export function getDateByCity(city, unixTime) {
  // Используем временную зону по названию города
  const timeZone = moment.tz.names().find((zone) => zone.includes(city));

  if (!timeZone) return "XXXX, XX XXX";

  // Получаем текущее время в указанной временной зоне в нужном формате
  if (unixTime) return moment.unix(unixTime).tz(timeZone).format("dddd, D MMM");
  return moment().tz(timeZone).format("dddd, D MMM");
}
