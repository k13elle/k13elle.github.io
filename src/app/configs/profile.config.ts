import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProfileLink } from "@/I/profile.interface";
import { SharedModule } from '@/M/shared.module';
import { HashService } from '@/S/hash/hash.service';

export const EMAIL = 'k13elle@gmail.com';
export const IMPORTS = [
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	SharedModule
];

export const PROFILE_LINKS: ProfileLink[] = [
	{
		href: 'mailto:' + EMAIL,
		icon: 'mail'
	},
	{
		href: 'https://linktr.ee/k13elle',
		icon: 'link'
	}
];

export const PROVIDERS = [
	HashService
];