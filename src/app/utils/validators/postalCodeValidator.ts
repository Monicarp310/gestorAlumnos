import { Provinces } from './../modals/provinces.model';
import { provinces } from './../data/provinces';
import { AbstractControl, ValidatorFn } from "@angular/forms";

export class postalCodeValidator {
  public static listOfProvinces: Provinces[] = provinces;
  static isPostalCodeValid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this._isPostalCodeCorrect(control.value) == null
        ? null
        : { resultado: 'Incorrecto' };
    };
  }

  private static _isPostalCodeCorrect(value: string) {
    if (!value) {
      return null;
    }

    const PostalCodeRegEx = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;

    if (!PostalCodeRegEx.test(value) && !PostalCodeRegEx.test(value)) {
      return { resultado: 'Incorrecto' };
    } else {
      if (provinces) {
        const prov: Provinces | undefined = this.listOfProvinces.find(element => element.name);

        if (prov) {
          if (value.slice(0, 2) == prov.value) {

            return null;

          } else {
            return { resultado: 'Incorrecto' };

          }
        } else {
          return { resultado: 'Incorrecto' };

        }
      } else {
        return null;
      }
    }
  }
}

