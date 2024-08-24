import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  ApplicationConfig,
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withHttpTransferCacheOptions({
        filter(req) {
          return !req.url.includes('/api/event?page=0&size=10');
        },
      }),
    ),
    provideHttpClient(withFetch()),
    provideAnimations(),
  ],
};
