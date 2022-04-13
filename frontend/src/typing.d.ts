import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';

declare var $env: ENV;

interface ENV {
  API_KEY: string;
  LOCATION_API_KEY: string;
  ApiUri: string;
}
