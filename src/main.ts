import { bootstrapApplication } from '@angular/platform-browser';

import { BOOTSTRAP_CONFIG } from '@/CF/app.config';
import { AppComponent } from '@/C/app/app.component';

bootstrapApplication(AppComponent, BOOTSTRAP_CONFIG)
  .catch((err) => console.error(err));
