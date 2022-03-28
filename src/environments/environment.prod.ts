declare var process: any;

export const environment = {
  production: true,
  API_KEY: process.env['API_KEY'],
  LOCATION_API_KEY: process.env['LOCATION_API_KEY'],
};
