import { Component } from '@angular/core';
import { GravatarService } from 'src/app/services/gravatar/gravatar.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent{

	menu = [
		/*{
			disabled: true,
			display: 'text',
			href: '',
			label: 'menu.profile',
			target: '_self'
		},
		{
			disabled: true,
			display: 'text',
			href: '',
			label: 'menu.showcase',
			target: '_self'
		},
		{
			display: 'icon',
			href: 'https://github.com/k13elle',
			label: 'logo-github',
			target: '_blank'
		},
		{
			display: 'icon',
			href: 'https://www.flickr.com/photos/kenta13elle',
			label: 'logo-flickr',
			target: '_blank'
		},
		{
			display: 'icon',
			href: 'https://kenta13elle.wordpress.com/',
			label: 'logo-wordpress',
			target: '_blank'
		},*/
		{
			disabled: true,
			display: 'icon',
			label: 'logo-no-smoking',
			target: '_blank'
		}
	];

	constructor(
		public gravatarServ: GravatarService
	) { }

}
