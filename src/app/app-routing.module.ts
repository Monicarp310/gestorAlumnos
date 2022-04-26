import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnoComponent } from './altaAlumno/components/altaAlumno/components/alta-alumno.component';

const routes: Routes = [
  {path: '', component: AltaAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
