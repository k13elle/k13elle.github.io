import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideAnimationsAsync
} from '@angular/platform-browser/animations/async';
import { RouterOutlet, provideRouter } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatToolbarModule } from '@angular/material/toolbar';

import { routes } from '@/app.routes';

const components: never[] = [];
const modules = [
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  RouterOutlet
];

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync()
  ]
};

export const IMPORTS = [].concat(modules as never[], components as never[]);
