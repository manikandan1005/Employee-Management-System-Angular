import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
      this.http.get("https://683091b36205ab0d6c399e28.mockapi.io/api/user/EmployeeLogin").subscribe(results=>(this.logiDT=results));
  }
  http=inject(HttpClient);
  user:any={name:'',pass:''};
  router=inject(Router);
  logiDT:any={name:'',pass:''};
 // localDt:any=localStorage.getItem('user');
  //regDt=JSON.parse(this.localDt)
  login(){
    debugger
    //console.log(this.logiDT)
    let getUser=this.logiDT.find((tempV:any)=>tempV.name==this.user.name && tempV.name==this.user.name)
  //  if(this.user.name){}
  // else{
  //getUser=JSON.parse(getUser);
  //console.log(getUser);
     if(getUser){
      debugger
      this.router.navigateByUrl("home");
      const username=localStorage.setItem('userName',this.logiDT.name);
    }
    else{
      debugger
      if(this.user.name=='Admin' && this.user.pass=='admin'){
         this.router.navigateByUrl("home");
         let dt="Admin"
      const username=localStorage.setItem('userName',dt);
      }
      else
      alert('enter the dt');
    }
 //  }
  }

}
