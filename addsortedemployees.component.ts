import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addsortedemployees',
  templateUrl: './addsortedemployees.component.html',
  styleUrls: ['./addsortedemployees.component.css']
})
export class AddsortedemployeesComponent implements OnInit {

  employeesort=[
    {
      empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'
    },
    {
      empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'
    },
    {
      empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'
    },
    {
      empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'
    },
    {
      empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'
    },
    {
      empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'
    },
    {
      empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'
    },

  ];
  constructor() { }

  ngOnInit() {
  }
  sortId(){
    this.employeesort.sort((a,b)=>(a.empId>b.empId)?1:-1)
  }
  sortName(){
    this.employeesort.sort((a,b)=>(a.empName>b.empName)?1:-1)
  }
  sortSal(){
    this.employeesort.sort((a,b)=>(a.empSal>b.empSal)?1:-1)
  }
  sortDept(){
    this.employeesort.sort((a,b)=>(a.empDep>b.empDep)?1:-1)
  }
}
