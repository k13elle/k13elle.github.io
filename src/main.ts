import { bootstrapApplication } from '@angular/platform-browser';

import { APP_CONFIG as appConfig } from '@/CONF/app.config';
import { AppComponent } from '@/C/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
