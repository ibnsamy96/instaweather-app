const express = require("express")
require("dotenv").config()

const getWeatherAndLocationInfo = require("./dataFormatter")

const app = express()
const PORT = 3000

app.get("/", async (req, res) => {
  const data = await getWeatherAndLocationInfo(30.77, 31.0)
  // res.set("Content-Type", "text/html")
  res.status(200).send(data)
})

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    )
  else console.log("Error occurred, server can't start", error)
})
