import { Component, OnInit } from '@angular/core';
import employeedata from '../../employeedata/employeedata.json'
@Component({
  selector: 'app-addanemployee',
  templateUrl: './addanemployee.component.html',
  styleUrls: ['./addanemployee.component.css']
})
export class AddanemployeeComponent implements OnInit {
  array2=employeedata
  constructor() { }

  ngOnInit() {
  }
  addEmployee(add)
  {
    console.log(add.empId,add.empName,add.empSal,add.empDep)
    this.array2.push(add)
}
}
