import { Component, OnInit } from '@angular/core';
import {MathematicalService} from '../mathematical.service';
//import data from '../../data/employeedata.json'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     //employees=data
  // employees=[
  //   {
  //     id:1001,
  //     name:"john",
  //     salary:20000,
  //     department:"it"

  //   }
  // ];
 
  constructor(private service:MathematicalService) { }

  ngOnInit() {
    // this.service.sub();
  }
  // getSer(){
  //   alert(this.service.mul(3,5))
  // }
   
  getName(id,name,salary,department){
    this.service.displayName(id,name,salary,department)
  }
header:boolean=true;
//  employees=
//  [
//    {id:1,name :"abc"},
//    {id:2,name :"abc"},
//    {id:3,name :"abc"}
//  ];
}
