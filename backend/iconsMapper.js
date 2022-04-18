const weatherApiIconsCodes = {
  113: "01",
  116: "02",
  119: "03",
  122: "04",
  143: "50",
  176: "10",
  179: "13",
  182: "10",
  185: "13",
  200: "11",
  227: "13",
  230: "13",
  248: "50",
  260: "50",
  263: "09",
  266: "09",
  281: "50",
  284: "50",
  293: "10",
  296: "09",
  299: "10",
  302: "09",
  305: "10",
  308: "09",
  311: "09",
  314: "09",
  317: "13",
  320: "13",
  323: "10",
  326: "04",
  329: "10",
  332: "13",
  335: "10",
  338: "13",
  350: "13",
  353: "10",
  356: "10",
  359: "09",
  362: "10",
  365: "13",
  368: "13",
  371: "13",
  374: "10",
  377: "10",
  386: "11",
  389: "11",
  392: "11",
  395: "11",
}

// //cdn.weatherapi.com/weather/64x64/day/116.png

function mapWeatherApiIcon(weatherApiIconUrl) {
  const urlArray = weatherApiIconUrl.split("/")
  const code = urlArray[urlArray.length - 1].split(".")[0] // 116
  const type = urlArray[urlArray.length - 2] // day or night
  return `${weatherApiIconsCodes[code]}${type[0]}`
}

const weatherBitIconsCodes = {
  200: "10",
  201: "10",
  202: "10",
  230: "11",
  231: "11",
  232: "11",
  233: "11",
  300: "13",
  301: "13",
  302: "13",
  500: "09",
  501: "09",
  502: "09",
  511: "09",
  520: "10",
  521: "10",
  522: "10",
  600: "13",
  601: "13",
  602: "13",
  610: "13",
  611: "04",
  612: "04",
  621: "13",
  622: "13",
  623: "13",
  700: "50",
  711: "50",
  721: "50",
  731: "50",
  741: "50",
  751: "50",
  800: "01",
  801: "02",
  802: "02",
  803: "03",
  804: "04",
  900: "09",
}

function mapWeatherBitIcon(icon, code) {
  const type = icon[icon.length - 1] // day or night
  return `${weatherBitIconsCodes[code]}${type[0]}`
}

function mapIcon({ weatherApiIconLink, weatherBitIcon, weatherBitCode }) {
  if (weatherApiIconLink) return mapWeatherApiIcon(weatherApiIconLink)
  else return mapWeatherBitIcon(weatherBitIcon, weatherBitCode)
}

module.exports = mapIcon
