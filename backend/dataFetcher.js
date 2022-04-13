const fetch = require("node-fetch")
require("dotenv").config()

const openWeatherMapApi = `https://api.openweathermap.org/data/2.5/weather?`
const locationIqApi = `https://us1.locationiq.com/v1/reverse.php?`
const weatherApi = "http://api.weatherapi.com/v1/forecast.json?"

const privateKeys = {
  open_weather_map: process.env.OPENWEATHERMAP_API_KEY,
  weather_api: process.env.WEATHERAPI_API_KEY,
  location_iq: process.env.LOCATIONIQ_API_KEY,
}

async function fetchJSON(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

async function getOpenWeatherMapInfo(latitude, longitude) {
  const url =
    openWeatherMapApi +
    `lat=${latitude}&lon=${longitude}&units=metric&appid=${privateKeys.open_weather_map}`
  const data = await fetchJSON(url)
  return data
}

async function getWeatherApiInfo(latitude, longitude) {
  // maximum for forecasted days is 3, any larger number will be normalized to 3
  const url =
    weatherApi +
    `q=${latitude},${longitude}&days=10&key=${privateKeys.weather_api}`
  const data = await fetchJSON(url)
  return data
}

// TODO use location from openweathermap || weatherapi instead of this
// async function getLocationInfo(latitude, longitude) {
//   const url =
//     locationIqApi +
//     `lat=${latitude}&lon=${longitude}&format=json&normalizeaddress=1&normalizecity=1&key=${privateKeys.location_iq}`

//   const data = await fetchJSON(url)
//   return data
// }

module.exports = { getWeatherApiInfo, getOpenWeatherMapInfo }
