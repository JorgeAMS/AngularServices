import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatAutocompleteModule } from '../../node_modules/@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { MatFormFieldModule } from '../../node_modules/@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  MatAutocompleteModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
