import { Component } from '@angular/core';

import { map } from 'rxjs';

import { EMAIL, IMPORTS, PROFILE_LINKS, PROVIDERS } from '@/CF/profile.config';
import { ProfileLink } from '@/I/profile.interface';
import { HashService } from '@/S/hash/hash.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: IMPORTS,
  providers: PROVIDERS,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  avatarLink$ = this.hashServ.hash(undefined, EMAIL).pipe(map(this.generateAvatarURL));
  profileLinks: ProfileLink[] = PROFILE_LINKS;

  constructor(private hashServ: HashService) {}

  generateAvatarURL(hash: string): string {
    return `url('https://gravatar.com/avatar/${hash}')`;
  }
}
