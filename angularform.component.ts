import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent implements OnInit {
  showIdValidation=false
  showNameValidation=false
  showCostValidation=false
  showCategoryValidation=false
  showStoreValidation=false
  
  constructor() { }

  ngOnInit() {
  }
  addProduct(add)
  {
    console.log(add.ID,add.Name,add.Cost,add.Online,add.Category,add.Store)
    if(!add.ID){
      this.showIdValidation=true
      return
    }
    else{
      this.showIdValidation=false
    }
    if(!add.Name){
      this.showNameValidation=true
      return
    }
    else{
      this.showNameValidation=false
    }
    if(!add.Cost){
      this.showCostValidation=true
      return
    }
    else{
      this.showCostValidation=false
    }
    if(!add.Category){
      this.showCategoryValidation=true
      return
    }
    else{
      this.showCategoryValidation=false
    }
    if(!add.Store){
      this.showStoreValidation=true
      return
    } 
    else{
      this.showStoreValidation=false
    }
   
}

}
