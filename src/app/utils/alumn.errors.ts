import { ALUMN_CONTANTS } from "./alumnConstants";


export const ALUMN_ERRORS = {
  name: {
    notProvided: 'No se ha adjuntado un nombre',
  },
  surname1: {
    notProvided: 'No se ha adjuntado un apellido',
  },
  email: {
    invalid: 'Email inválido',
    notProvided: 'No se ha adjuntado un email',
  },
  dni: {
    notProvided: 'No se ha adjuntado un dni',
  },
  phone: {
    invalid: "Teléfono inválido",
    notProvided: 'No se ha adjuntado un teléfono',
  },
  country: {
    notProvided: 'No se ha seleccionado un país',
  },
  province: {
    notProvided: 'No se ha adjuntado una provincia',
  },
  postacode: {
    invalid: "Código postal inválido",
    notProvided: 'No se ha seleccionado un código postal',
  },
  nickname: {
    notProvided: 'No se ha adjuntado una nickname',
  },
  password: {
    notProvided: 'No se ha adjuntado una contraseña',
    minLength: `Debe contener al menos ${ALUMN_CONTANTS.password.minLength} caracteres`,
    maxLength: `Debe contener como máximo ${ALUMN_CONTANTS.password.maxLength} caracteres`,
  }
}

