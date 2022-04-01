const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $env: {
        API_KEY: "c2853a6fe518648e65a57eaddd0684a2",
        LOCATION_API_KEY: "pk.0ff9c4ba4e471c21a43703afe3c207e8",
      },
    }),
  ],
};
