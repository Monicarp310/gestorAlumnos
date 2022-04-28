import { AbstractControl, ValidatorFn } from "@angular/forms";

export class PhoneValidator{
  static isPhoneValid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this._isPhoneCorrect(control.value) == null
        ? null
        : { resultado: 'Incorrecto' };
    };
  }

  private static _isPhoneCorrect(value: string){
    if(!value){
      return null;
    }

    const numberRegEx = /^(0034|\+34|34)?(6\d{2}|7\d{2}|9[1-9]\d{1})\d{6}$/;

    if (!numberRegEx.test(value) && !numberRegEx.test(value)) {
      return { resultado: 'Incorrecto' };
    }
  }
}
