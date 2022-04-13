const openWeatherMapIcons = {
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

function mapIcon(weatherApiIconUrl) {
  const urlArray = weatherApiIconUrl.split("/")
  const code = urlArray[urlArray.length - 1].split(".")[0] // 116
  const type = urlArray[urlArray.length - 2] // day or night
  return `${openWeatherMapIcons[code]}${type[0]}`
}

module.exports = mapIcon
