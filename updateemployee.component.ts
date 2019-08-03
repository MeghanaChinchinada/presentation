import { Component, OnInit } from '@angular/core';
import { UpdateEmployeeService } from '../update-employee.service'
import employeedata from '../../employeedata/employeedata.json'
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  array=employeedata
 emp:any
 empId:any
 empName:any
  empSal:any
 empDep:any
 index=null;
 

  constructor(private service: UpdateEmployeeService) { }

  ngOnInit() {
    if(this.service.subsVar==undefined)
    {
       this.service.subsVar=this.service.invokeupdate.subscribe((n:number) => { 
       this.view(n)
    });
 
   }
 
  }
  view(i:number)
 {
  
 this.empId=this.array[i].empId
 
  this.empName=this.array[i].empName
 
  this.empSal=this.array[i].empSal
 
  this.empDep=this.array[i].empDep

  this.index=i
 
}
setNew(form){
  this.array.splice(this.index,1,{
    empId:this.empId,
    empName:this.empName,
    empSal:this.empSal,
    empDep:this.empDep
  })
}

}
