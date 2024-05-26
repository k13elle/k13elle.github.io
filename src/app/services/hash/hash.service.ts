import { Injectable } from '@angular/core';

import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  constructor() { }

  hash(algorithm = 'SHA-256', text: string): Observable<string> {
    const enconder = new TextEncoder();
    const data = enconder.encode(text);
    return from(window.crypto.subtle.digest(algorithm, data))
      .pipe(
        map((buffer: ArrayBuffer) => Array.from(new Uint8Array(buffer))),
        map((array) => array.map(b => b.toString(16).padStart(2, "0")).join(''))
      );
  }
}
