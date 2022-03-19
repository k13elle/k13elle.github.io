import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
	defaultLocale,
	locales
} from './config/locale';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

	constructor (
		public translate: TranslateService
	) {
		this.init();
	}

	init(): void {
		this.translate.addLangs(locales);
		this.translate.setDefaultLang(defaultLocale);
	}

}
