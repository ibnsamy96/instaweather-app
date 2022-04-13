const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $env: {
        API_KEY: JSON.stringify(process.env.API_KEY),
        LOCATION_API_KEY: JSON.stringify(process.env.LOCATION_API_KEY),
        ApiUri: JSON.stringify(process.env.ApiUri),
      },
    }),
  ],
};
