import { AbstractControl, ValidatorFn } from "@angular/forms";
export class confirmPasswordValidator {
  static isValidPass(pass: AbstractControl | null): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this._isCorrectPass(control.value, pass) == null
        ? null
        : { resultado: 'Incorrecta' };
    };
  }

  private static _isCorrectPass(value: string, pass: AbstractControl | null) {
    if (!value) {
      return null;
    }

    if (value !== pass?.value) {
      return null;
    }
    return { resultado: 'Incorrecta' };
  }
}
