import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeService{
  invokeupdate=new EventEmitter();
  subsVar: Subscription;

  constructor() { }
  upsend(n:number){
    this.invokeupdate.emit(n);
  }
}
