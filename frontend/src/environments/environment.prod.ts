import { $env } from 'src/typing.d';

export const environment = {
  production: true,
  API_KEY: $env.API_KEY,
  LOCATION_API_KEY: $env.LOCATION_API_KEY,
  ApiUri: $env.ApiUri,
};
