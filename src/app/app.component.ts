import { Component } from '@angular/core';
import { Data } from '../app/dto/data';
import { DataService } from '../app/service/data.service';
import { FormControl } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData = new FormControl();

  displayedColumn: string[] = ['id', 'lastname', 'name', 'age', 'email', 'city', 'birthdate'];
  datas: Data[]; 

  title = 'material';

  constructor(private dataService : DataService){
    this.datas=this.dataService.getData();
  }

  ngOnInit(){
  }
}
