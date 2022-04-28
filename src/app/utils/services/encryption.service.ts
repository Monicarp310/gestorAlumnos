import { Injectable } from '@angular/core';
/* import * as CryptoJS from 'crypto-js';
 */
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

/*   constructor() { }

  set(keys:string, value:string):string{
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
      keySize: 128/8,
      iv:iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  get(keys:string, value:string):string{
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const descrypted = CryptoJS.AES.decrypt(value, key,
    {
      keySize: 128/8,
      iv:iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return descrypted.toString();
  } */
}
