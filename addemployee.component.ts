import { Component, OnInit } from '@angular/core';
import { UpdateEmployeeService } from '../update-employee.service'
import employeedata from '../../employeedata/employeedata.json'
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  public enableEdit = true;
  employees=employeedata

  constructor(private service:UpdateEmployeeService) { }

  ngOnInit() {
  }
  deleteEmployee(i){
    this.employees.splice(i,1)
    
  }
  updateEmployee(i)
  {
    this.service.upsend(i);
   
  }
  

}
