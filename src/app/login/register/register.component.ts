import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

   router=inject(Router);
   register:any={name:'',pass:'',conPass:''};
   
   sigIn(){
    
    if(this.register.pass===this.register.conPass){
      const userLogin=JSON.stringify(this.register);
      localStorage.setItem("user",userLogin);
      this.router.navigateByUrl("login");
    }
    else{
      alert("Enter correct detials");
    }

   }
}
