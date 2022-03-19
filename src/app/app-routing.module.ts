import { NgModule } from '@angular/core';
import {
	RouterModule,
	Routes
} from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
	{
		component: LandingComponent,
		path: ''
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
