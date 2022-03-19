import {
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	HttpClient,
	HttpClientModule
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
	TranslateModule,
	TranslateLoader
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';

import { GravatarService } from './services/gravatar/gravatar.service';

export const HttpLoaderFactory = (httpClient: HttpClient) => new TranslateHttpLoader(httpClient);

const translateModuleConfig = {
	loader: {
		provide: TranslateLoader,
		useFactory: HttpLoaderFactory,
		deps: [ HttpClient ]
	}
};

const ngCoreImports = [
	AppRoutingModule,
	BrowserAnimationsModule,
	BrowserModule,
	CommonModule,
	HttpClientModule
];

const ngPluginImports = [
	TranslateModule.forRoot(translateModuleConfig)
];

const uiImports = [
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	MatIconModule
];

const components = [
	LandingComponent
];

const providers = [
	GravatarService
];

const schemas = [
	NO_ERRORS_SCHEMA
];

@NgModule({
	bootstrap: [ AppComponent ],
	declarations: [
		AppComponent,
		...components
	],
	imports: [
		...ngCoreImports,
		...ngPluginImports,
		...uiImports
	],
	providers: providers,
	schemas: schemas
})
export class AppModule {}
