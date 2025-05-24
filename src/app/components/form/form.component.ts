import { Component, inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  
  employeeObj={name:'',lastname:'',role:'',position:'',workStatus:true,level:''};
  http=inject(HttpClient);
  post(){
    this.http.post('https://683091b36205ab0d6c399e28.mockapi.io/api/user/EmployeeDT',this.employeeObj).subscribe(res=>alert("Employee Add"))
  }
  onAdd(){
    if(this.employeeObj.name!="" && this.employeeObj.role!="" && this.employeeObj.position!="")
    {
    console.log(this.employeeObj);
    this.post();
    //this.data.addform(this.employeeObj);
    this.employeeObj={name:'',lastname:'',role:'',position:'',workStatus:true,level:''};
  }
  else{
    alert("Enter the detials");
  }
  
}
constructor(private data:ServiceService){}
}
