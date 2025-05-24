import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  header:string="Employee List";
  router=inject(Router);
  list(){
    this.router.navigateByUrl("/home/list");
    this.header="Employee List";
  }
  form(){
    this.router.navigateByUrl("/home/form");
    this.header="Add New Employee";
  }
}
