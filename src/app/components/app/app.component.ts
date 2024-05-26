import { Component } from '@angular/core';

import { IMPORTS as imports } from '@/configs/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports,
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'k13elle.github.io';
}
