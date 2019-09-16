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
/*
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD/MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD/MMMM YYYY',
  },
};
*/

export class AppComponent {
  myData = new FormControl();
  dataSelected: string;
  displayedColumn: string[] = ['check','id', 'lastname', 'name', 'age', 'email', 'city', 'birthdate'];
  datas: Data[];

  slider1=0;
  toggle1=0;
  date1 = new Date("2018/09/04");
  suma=0;
  //date2= new Date(this.datas.birthdate)
  
  cambiar() {
    this.suma = this.slider1;    
  }

  constructor(private dataService : DataService){
    this.datas=this.dataService.getData();
  }

  /*
  title = 'material';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  valor = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(valor) {
    this._tickInterval = coerceNumberProperty(valor);
  }
  private _tickInterval = 1;


  constructor(private dataService : DataService){
    this.datas=this.dataService.getData();
  }
  */

  //Starts Autocomplete
  /*
  filteredDatas: Observable<Data[]>;

  ngOnInit() {
    this.filteredDatas = this.myData.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Data[] {
    const filterValue = value.toLowerCase();
    return this.datas.filter(data => this.datas.toLowerCase().includes(filterValue));
  }
*/
  
  //ENDS Autocomplete

  //Starts slider
  
  
  //ENDS slider

}
