import { Component, inject, OnInit, Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  searchDt:string='';
  http=inject(HttpClient);
  router=inject(Router);
  list:any[]=[];
  ngOnInit(): void {
    console.log("API is called")
    this.http.get<any>("https://683091b36205ab0d6c399e28.mockapi.io/api/user/EmployeeDT").subscribe(result=>this.list=result)
   // this.data.employee$.subscribe(upDt=>this.list.unshift(...upDt))
  }

  // list:any[]=[];
  remove(i:number){
    this.list.splice(i,1);
  }
  edit(i:string){
    this.router.navigate(["/home/Update",i]);
     let title="Update the Employee data";
  }
  @Output() title="";
  constructor(private data:ServiceService){}
}

