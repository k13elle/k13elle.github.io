import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  provideAnimationsAsync
} from '@angular/platform-browser/animations/async';
import { RouterOutlet, provideRouter } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './route.config';
import { SharedModule } from '@/M/shared.module';


const FACTORY = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, 'i18n/', '.json');
};
const BOOTSTRAP_PROVIDERS = [
  provideHttpClient(),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  TranslateModule.forRoot({
    defaultLanguage: 'en-UK',
    loader: {
      provide: TranslateLoader,
      useFactory: FACTORY,
      deps: [HttpClient]
    }
  }).providers!
];

export const BOOTSTRAP_CONFIG: ApplicationConfig = {
  providers: BOOTSTRAP_PROVIDERS
};
export const IMPORTS = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  RouterOutlet,
  SharedModule
];
export const LOCALES = [
  'en-UK',
  'th-TH'
];
