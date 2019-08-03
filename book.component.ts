import { Component, OnInit } from '@angular/core';
import bookdata from '../../bookdata/bookdata.json'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books=bookdata
  constructor() { 
    //console.log(this.books.id);
  }

  ngOnInit() {
    
  }

}
