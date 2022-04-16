const {
  getOpenWeatherMapInfo,
  getWeatherApiInfo,
  getWeatherBitInfo,
} = require("./dataFetcher")
const mapIcon = require("./iconsMapper")

function formatLocation(currentInfo, hourlyForecastInfo) {
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
    region: hourlyForecastInfo.location.region,
    country: hourlyForecastInfo.location.country,
  }
  return location
}

function formatCurrentWeather(currentInfo, hourlyForecastInfo) {
  /*
    current: {
      date:,
      icon,
      temp,
      temp_max,
      temp_min,
      state_text,
      state_description
    }
  */

  const lastUpdate = hourlyForecastInfo.current.last_updated.split(" ")

  const date = hourlyForecastInfo.current.last_updated

  const current = {
    date,
    state_text: currentInfo.weather[0].main,
    icon: currentInfo.weather[0].icon,
    temp: currentInfo.main.temp,
    temp_max: hourlyForecastInfo.forecast.forecastday[0].day.maxtemp_c,
    temp_min: hourlyForecastInfo.forecast.forecastday[0].day.mintemp_c,
    state_description: currentInfo.weather[0].description,
  }

  return current
}

function formatHourlyForecastedInfo(hourlyForecastInfo) {
  /*
    hourly_forecast:[
      {
        date,
        hours:[
          {
            hour,
            icon,
            temp
          }
        ]
      }
    ]
  */

  const hourly_forecast = hourlyForecastInfo.forecast.forecastday.map(
    (dayObj) => {
      const date = dayObj.date
      const hours = dayObj.hour.map((hourObj) => {
        const hour = hourObj.time.split(" ")[1]
        const icon = mapIcon({ weatherApiIconLink: hourObj.condition.icon })
        const temp = hourObj.temp_c
        return { hour, icon, temp }
      })
      return { date, hours }
    }
  )

  return hourly_forecast
}

function formatDailyForecastedInfo(dailyForecastInfo) {
  // return dailyForecastInfo
  /*
    daily_forecast:[
      {
        date,
        icon,
        temp,
        state_text,
      }
    ]
  */

  daily_forecast = dailyForecastInfo.data.map((dayObj) => {
    date = dayObj.valid_date
    icon = mapIcon({
      weatherBitCode: dayObj.weather.code,
      weatherBitIcon: dayObj.weather.icon,
    })
    temp = dayObj.temp
    state_text = dayObj.weather.description
    return { date, icon, temp, state_text }
  })

  return daily_forecast
}

async function getWeatherAndLocationInfo(latitude, longitude) {
  const currentInfo = await getOpenWeatherMapInfo(latitude, longitude)
  const hourlyForecastInfo = await getWeatherApiInfo(latitude, longitude)
  const dailyForecastInfo = await getWeatherBitInfo(latitude, longitude)

  /*
    data = {
        location,
        current,
        forecast
    }
  */

  const location = formatLocation(currentInfo, hourlyForecastInfo)
  const current = formatCurrentWeather(currentInfo, hourlyForecastInfo)
  const hourly_forecast = formatHourlyForecastedInfo(hourlyForecastInfo)
  const daily_forecast = formatDailyForecastedInfo(dailyForecastInfo)

  return { location, current, hourly_forecast, daily_forecast }
}

module.exports = getWeatherAndLocationInfo
