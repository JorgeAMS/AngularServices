import { Component, OnInit } from '@angular/core';
import { Data } from '../app/dto/data';
import { DataService } from '../app/service/data.service';
import { FormControl } from '../../node_modules/@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ViewEncapsulation } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myData = new FormControl();
  dataSelected: string;
  displayedColumn: string[] = ['check', 'select','id', 'lastname', 'name', 'age', 'email', 'city', 'birthdate'];
  datas: Data[];

  slider1=0;
  toggle1=0;
  date1 = new Date("2018/09/04");
  suma=0;
  IdSelected="";
  IsSelected : boolean;
  NameSelected1 : string;

  cambiar() {
    this.suma = this.slider1;    
  }

  checkStatus(event){
    this.IsSelected=(event.checked);
  }


  getID(NameSelected : string = ""){
    console.log(this.IsSelected);
    if(this.IdSelected.includes(NameSelected)){
      this.IdSelected=this.IdSelected.replace(NameSelected+",","");
    }
    else{
      this.IdSelected = this.IdSelected + " " + NameSelected;
      if (this.IdSelected.length>1){
        this.IdSelected = this.IdSelected+","
      }
    }
  }

  constructor(private dataService : DataService){
    this.datas=this.dataService.getData();
  }
}
