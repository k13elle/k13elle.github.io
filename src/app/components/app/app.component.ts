import { Component } from '@angular/core';

import { IMPORTS, LOCALES } from '@/CF/app.config';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: IMPORTS,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  locales = LOCALES;

  constructor(private translateServ: TranslateService) {}

  changeLocale(locale: string): void {
    this.translateServ.use(locale)
  }
}
