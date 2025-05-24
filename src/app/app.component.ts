import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  router=inject(Router);
  title = 'EmployeeManagement';
  logout(){
    this.router.navigateByUrl('');
    localStorage.removeItem('userName');
  }
}
