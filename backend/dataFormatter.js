const { getOpenWeatherMapInfo, getWeatherApiInfo } = require("./dataFetcher")

function formatLocation(currentInfo, forecastInfo) {
  /*
    location:{
      longitude,
      latitude,
      city,
      region,
      country
    }
*/

  const location = {
    longitude: currentInfo.coord.lon,
    latitude: currentInfo.coord.lat,
    city: currentInfo.name,
    region: forecastInfo.location.region,
    country: forecastInfo.location.country,
  }
  return location
}

function formatCurrentWeather(currentInfo, forecastInfo) {
  /*
    current: {
      date:{
        day,
        month,
        year
      },
      icon,
      temp,
      temp_max,
      temp_min,
      main,
      description
    }
  */

  const lastUpdate = forecastInfo.current.last_updated.split(" ")

  const date = {
    minutes: lastUpdate[1].split(":")[1],
    hours: lastUpdate[1].split(":")[0],
    day: lastUpdate[0].split("-")[2],
    month: lastUpdate[0].split("-")[1],
    year: lastUpdate[0].split("-")[0],
  }

  const current = {
    date,
    main: currentInfo.weather[0].main,
    description: currentInfo.weather[0].description,
    icon: currentInfo.weather[0].icon,
    temp: currentInfo.main.temp,
    temp_max: forecastInfo.forecast.forecastday[0].day.maxtemp_c,
    temp_min: forecastInfo.forecast.forecastday[0].day.mintemp_c,
  }

  return current
}

function formatForecastedInfo(forecastInfo) {
  /*
    forecast:{}
  */
}

async function getWeatherAndLocationInfo(latitude, longitude) {
  const currentInfo = await getOpenWeatherMapInfo(latitude, longitude)
  const forecastInfo = await getWeatherApiInfo(latitude, longitude)

  /*
    TODO  concatenate the needed data
    data = {
        location,
        current,
        forecast
    }
  */

  const location = formatLocation(currentInfo, forecastInfo)
  const current = formatCurrentWeather(currentInfo, forecastInfo)
  const forecast = formatForecastedInfo(forecastInfo)

  // TODO return concatenated data
  return { location, current, forecast }
}

module.exports = getWeatherAndLocationInfo
