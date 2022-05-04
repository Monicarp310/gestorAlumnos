import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { AltaAlumnoComponent } from './altaAlumno/components/altaAlumno/components/alta-alumno.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { EncryptionService } from './utils/services/encryption.service';

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  exports: [
  ],
  providers: [EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
