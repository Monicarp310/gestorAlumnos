import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ALUMN_ERRORS } from 'src/app/utils/alumn.errors';
import { GENERAL_ERRORS } from 'src/app/utils/general.errors';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {
  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly ALUMN_ERRORS = ALUMN_ERRORS;

  registerForm = new FormGroup({
    name: new FormControl(''),
    lastName1: new FormControl(''),
    lastName2: new FormControl(''),
    email: new FormControl(''),
    dni: new FormControl(''),
    phone1: new FormControl(''),
    phone2: new FormControl(''),
    country: new FormControl(''),
    province: new FormControl(''),
    postalCode: new FormControl(''),
    town: new FormControl(''),
    nickname: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.registerForm.value);
  }
}
