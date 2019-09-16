import { Injectable } from '@angular/core';
import { Data } from '../dto/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datas: Data[] = [
    {id:10132, lastname: 'Morales Sarmiento',   name: 'Jorge Armando',    age: 19,  email: 'jamorales@gmail.com',    city: 'Bogotá',         birthdate: '1999-12-02'},
    {id:21904, lastname: 'Sarmiento Vargas',    name: 'Angie',            age: 21,  email: 'angisita44@outlook.com',  city: 'Popayán',        birthdate: '1997-10-13'},
    {id:32309, lastname: 'Rojas Quintero',      name: 'Ludivia',          age: 28,  email: 'lurojas@hotmail.com',  city: 'Cartagena',      birthdate: '1991-05-29'},
    {id:12547, lastname: 'Hortúa Quevedo',      name: 'Juan Enrique',     age: 35,  email: 'jhrique@yahoo.com',    city: 'Bogotá',         birthdate: '1983-12-23'},
    {id:19843, lastname: 'Ortiz López',         name: 'Santiago',         age: 54,  email: 'santorz@hotmail.com',  city: 'Bogotá',         birthdate: '1965-03-06'},
    {id:10943, lastname: 'González Colmenares', name: 'Daniel',           age: 29,  email: 'danonza007@hotmail.com',  city: 'Bogotá',         birthdate: '1992-04-18'},
    {id:12083, lastname: 'Torres Stark',        name: 'Maria Paula',      age: 15,  email: 'mpstark-jarvis@outlook.com',  city: 'Armenia',        birthdate: '2004-06-13'},
    {id:18943, lastname: 'Rodriguez Ayala',     name: 'Luisa Fernanda',   age: 8,   email: 'lulu0708rod@gmail.com',    city: 'Manizales',      birthdate: '2011-08-11'},
    {id:20398, lastname: 'Suarez Garcia',       name: 'Anyela Valentina', age: 57,  email: 'vsg_06721@outlook.com',  city: 'Cali',           birthdate: '1961-11-27'},
    {id:12984, lastname: 'Gómez Diaz',          name: 'Sara Carolina',    age: 43,  email: 'sargodi@gmail.com',    city: 'Riohacha',       birthdate: '1976-05-13'},
    {id:14534, lastname: 'Jara Tovar',          name: 'Adriana',          age: 47,  email: 'addjar56@outlook.com',  city: 'Arauca',         birthdate: '1972-02-28'},
    {id:21322, lastname: 'Mojica Aguilera',     name: 'Luís Marcos',      age: 65,  email: 'aguilarluis@outlook.com',  city: 'Madrid',         birthdate: '1954-04-09'},
    {id:16465, lastname: 'Duarte Soto',         name: 'Douglas',          age: 66,  email: 'doulas56e34@gmail.com',    city: 'Chia',           birthdate: '1953-01-24'},
    {id:17365, lastname: 'Páez Guerrero',       name: 'Juan Camilo',      age: 57,  email: 'juankp_12@gmail.com',    city: 'Villavicencio',  birthdate: '1961-09-15'},
    {id:14653, lastname: 'Sanchez Valero',      name: 'Ramón Alirio',     age: 43,  email: 'rralirio_@outlook.com',  city: 'Neiva',          birthdate: '1975-09-23'},
  ];
  constructor() { }

  getData(){
    return this.datas;
  }
}
