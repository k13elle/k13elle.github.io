import { Injectable } from '@angular/core';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable({ providedIn: 'root' })
export class GravatarService {

	private gravatarURL = 'https://www.gravatar.com/avatar/';

	constructor() { }

	public getGravatarUrl(email: string): string {
		return this.gravatarURL + Md5.hashStr(email);
	}
}
