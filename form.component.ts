import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
// import datalogin from '../../datalogin/datalogin.json'
import logindata from '../../logindata/logindata.json';
import { Router } from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
//  employeesdata=logindata
 
  constructor(private router:Router) { 
 
  }
 
  ngOnInit() {
    console.log(logindata.username)
    console.log(logindata.password)
  }
  authenticate(login){
  
    if(login.username==logindata.username && login.password==logindata.password){
      alert('authenticated')
      window.localStorage.setItem('username',login.username)
      window.localStorage.setItem('password',login.password)
      this.router.navigate(['/addcustomer']);
    }
    else{
      alert('authentication failed')
    }
  }
  
}
