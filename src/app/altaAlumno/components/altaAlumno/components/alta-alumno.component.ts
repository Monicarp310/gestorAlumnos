import { countries } from './../../../../utils/data/countries';
import { Countries } from './../../../../utils/modals/country.model';
import { Provinces } from './../../../../utils/modals/provinces.model';
import { provinces } from './../../../../utils/data/provinces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ALUMN_ERRORS } from 'src/app/utils/errors/alumn.errors';
import { GENERAL_ERRORS } from 'src/app/utils/errors/general.errors';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {
  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly ALUMN_ERRORS = ALUMN_ERRORS;

  public provinces: Provinces[] = provinces;
  public countries: Countries[] = countries;

  registerForm = new FormGroup({
    name: new FormControl(''),
    lastName1: new FormControl(''),
    lastName2: new FormControl(''),
    email: new FormControl(''),
    dni: new FormControl(''),
    phone: new FormControl(''),
    phone2: new FormControl(''),
    country: new FormControl(''),
    province: new FormControl(''),
    postalCode: new FormControl(''),
    town: new FormControl(''),
    nickname: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = formBuilder.group({
      name: ['', Validators.required],
      lastName1: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      dni: ['', Validators.required],
      phone: ['', Validators.required],
      country:['',Validators.required],
      province:['',Validators.required],
      postalCode:['',Validators.required],
      town:['',Validators.required],
      nickname:['',Validators.required],
      password:['',Validators.required, Validators.minLength(6)],
      confirmPassword:['',Validators.required, Validators.minLength(6)],
    })
  }

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.registerForm.value);
  }
}
