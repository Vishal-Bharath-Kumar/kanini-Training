import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit {
  public book: any

  constructor(private api:ApiService){}
  
  ngOnInit(): void {
    this.GetBook();
  }

 private GetBook():void{
  this.api.GetBook().subscribe(result =>{
    this.book = result
  })
 }
  
}
