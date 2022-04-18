const express = require("express")
const cors = require("cors")
require("dotenv").config()

const getWeatherAndLocationInfo = require("./dataFormatter")

const app = express()
const PORT = 3000

app.use(
  cors({
    origin: ["https://instaweather.ibnsamy.me"],
  })
)

app.get("/", async (req, res) => {
  const latitude = req.query.lat
  const longitude = req.query.lon
  console.log(latitude, longitude)
  const data = await getWeatherAndLocationInfo(latitude, longitude)
  res.status(200).send(data)
})

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    )
  else console.log("Error occurred, server can't start", error)
})

module.exports = app
