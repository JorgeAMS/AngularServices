import { Injectable } from '@angular/core';
import { Data } from '../dto/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
/*
  datas: Data[] = [
    {id:0, lastname: 'Morales Sarmiento',   name: 'Jorge Armando',    age: 19,  email: '@gmail.com',    city: 'Bogotá',         birthdate: '02/12/1999'},
    {id:0, lastname: 'Sarmiento Vargas',    name: 'Angie',            age: 21,  email: '@outlook.com',  city: 'Popayán',        birthdate: '10/10/1997'},
    {id:0, lastname: 'Rojas Quintero',      name: 'Ludivia',          age: 28,  email: '@hotmail.com',  city: 'Cartagena',      birthdate: '28/05/1991'},
    {id:0, lastname: 'Hortúa Quevedo',      name: 'Juan Enrique',     age: 35,  email: '@yahoo.com',    city: 'Bogotá',         birthdate: '05/12/1983'},
    {id:0, lastname: 'Ortiz López',         name: 'Santiago',         age: 54,  email: '@hotmail.com',  city: 'Bogotá',         birthdate: '15/03/1965'},
    {id:0, lastname: 'González Colmenares', name: 'Daniel',           age: 27,  email: '@hotmail.com',  city: 'Bogotá',         birthdate: '29/04/1992'},
    {id:0, lastname: 'Torres Stark',        name: 'Maria Paula',      age: 15,  email: '@outlook.com',  city: 'Armenia',        birthdate: '02/06/2004'},
    {id:0, lastname: 'Rodriguez Ayala',     name: 'Luisa Fernanda',   age: 8,   email: '@gmail.com',    city: 'Manizales',      birthdate: '20/08/2011'},
    {id:0, lastname: 'Suarez Garcia',       name: 'Anyela Valentina', age: 57,  email: '@outlook.com',  city: 'Cali',           birthdate: '26/11/1961'},
    {id:0, lastname: 'Gómez Diaz',          name: 'Sara Carolina',    age: 43,  email: '@gmail.com',    city: 'Riohacha',       birthdate: '18/05/1976'},
    {id:0, lastname: 'Jara Tovar',          name: 'Adriana',          age: 47,  email: '@outlook.com',  city: 'Arauca',         birthdate: '17/02/1972'},
    {id:0, lastname: 'Mojica Aguilera',     name: 'Luís Marcos',      age: 65,  email: '@outlook.com',  city: 'Madrid',         birthdate: '01/04/1954'},
    {id:0, lastname: 'Duarte Soto',         name: 'Douglas',          age: 66,  email: '@gmail.com',    city: 'Chia',           birthdate: '19/01/1953'},
    {id:0, lastname: 'Páez Guerrero',       name: 'Juan Camilo',      age: 57,  email: '@gmail.com',    city: 'Villavicencio',  birthdate: '19/09/1961'},
    {id:0, lastname: 'Sanchez Valero',      name: 'Ramón Alirio',     age: 43,  email: '@outlook.com',  city: 'Neiva',          birthdate: '25/09/1975'},
  ];
*/
  datas: Data[] = [
    {id:10132, lastname: 'Morales Sarmiento',   name: 'Jorge Armando',    age: 19,  email: '@gmail.com',    city: 'Bogotá',         birthdate: '1999-12-02'},
    {id:21904, lastname: 'Sarmiento Vargas',    name: 'Angie',            age: 21,  email: '@outlook.com',  city: 'Popayán',        birthdate: '1997-10-13'},
    {id:32309, lastname: 'Rojas Quintero',      name: 'Ludivia',          age: 28,  email: '@hotmail.com',  city: 'Cartagena',      birthdate: '1991-05-29'},
    {id:12547, lastname: 'Hortúa Quevedo',      name: 'Juan Enrique',     age: 35,  email: '@yahoo.com',    city: 'Bogotá',         birthdate: '1983-12-23'},
    {id:19843, lastname: 'Ortiz López',         name: 'Santiago',         age: 54,  email: '@hotmail.com',  city: 'Bogotá',         birthdate: '1965-03-06'},
    {id:10943, lastname: 'González Colmenares', name: 'Daniel',           age: 27,  email: '@hotmail.com',  city: 'Bogotá',         birthdate: '1992-04-18'},
    {id:12083, lastname: 'Torres Stark',        name: 'Maria Paula',      age: 15,  email: '@outlook.com',  city: 'Armenia',        birthdate: '2004-06-13'},
    {id:18943, lastname: 'Rodriguez Ayala',     name: 'Luisa Fernanda',   age: 8,   email: '@gmail.com',    city: 'Manizales',      birthdate: '2011-08-11'},
    {id:20398, lastname: 'Suarez Garcia',       name: 'Anyela Valentina', age: 57,  email: '@outlook.com',  city: 'Cali',           birthdate: '1961-11-27'},
    {id:12984, lastname: 'Gómez Diaz',          name: 'Sara Carolina',    age: 43,  email: '@gmail.com',    city: 'Riohacha',       birthdate: '1976-05-13'},
    {id:14534, lastname: 'Jara Tovar',          name: 'Adriana',          age: 47,  email: '@outlook.com',  city: 'Arauca',         birthdate: '1972-02-28'},
    {id:21322, lastname: 'Mojica Aguilera',     name: 'Luís Marcos',      age: 65,  email: '@outlook.com',  city: 'Madrid',         birthdate: '1954-04-09'},
    {id:16465, lastname: 'Duarte Soto',         name: 'Douglas',          age: 66,  email: '@gmail.com',    city: 'Chia',           birthdate: '1953-01-24'},
    {id:17365, lastname: 'Páez Guerrero',       name: 'Juan Camilo',      age: 57,  email: '@gmail.com',    city: 'Villavicencio',  birthdate: '1961-09-15'},
    {id:14653, lastname: 'Sanchez Valero',      name: 'Ramón Alirio',     age: 43,  email: '@outlook.com',  city: 'Neiva',          birthdate: '1975-09-23'},
  ];
  constructor() { }

  getData(){
    return this.datas;
  }
}
