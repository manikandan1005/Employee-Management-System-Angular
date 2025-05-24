import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  standalone: false,
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent  implements OnInit{
  route=inject(ActivatedRoute);
  http=inject(HttpClient);
  id:string|null=null;
  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
  }

  addEmp={name:'',lastname:'',role:'',position:'',level:'',workStatus:''};
  update(){
    this.http.put(`https://683091b36205ab0d6c399e28.mockapi.io/api/user/EmployeeDT/${this.id}`,this.addEmp).subscribe(()=>alert('Update the user datr'))
    console.log(this.addEmp);
  }

}
