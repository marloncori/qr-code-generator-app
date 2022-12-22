import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as qrcode from 'qrcode';

@Injectable({
  providedIn: 'root'
})

export class QrCodeService {
  constructor() { }

  generateQrCode(url: string): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      qrcode.toDataURL(url, (err: any, qrCodeUrl: string) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(qrCodeUrl);
          observer.complete();
        }
      });
    });
  }
   
}