const fetch = require("node-fetch")
require("dotenv").config()

const openWeatherMapApi = `https://api.openweathermap.org/data/2.5/weather?`
const weatherApi = "http://api.weatherapi.com/v1/forecast.json?"
const weatherBit = "https://api.weatherbit.io/v2.0/forecast/daily?"

const privateKeys = {
  open_weather_map: process.env.OPENWEATHERMAP_API_KEY,
  weather_api: process.env.WEATHERAPI_API_KEY,
  weather_bit: process.env.WEATHERBIT_API_KEY,
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
    `q=${latitude},${longitude}&days=3&key=${privateKeys.weather_api}`
  const data = await fetchJSON(url)
  return data
}

async function getWeatherBitInfo(latitude, longitude) {
  // maximum for forecasted days is 16, any larger number will be normalized to 16
  const url =
    weatherBit +
    `lat=${latitude}&lon=${longitude}&days=16&key=${privateKeys.weather_bit}`
  const data = await fetchJSON(url)
  return data
}

module.exports = { getWeatherApiInfo, getOpenWeatherMapInfo, getWeatherBitInfo }
