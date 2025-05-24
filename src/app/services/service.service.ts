import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  // private employeeSubject=new BehaviorSubject<any[]>([]);
  // employee$=this.employeeSubject.asObservable();
  //addform(empData:any){
  //  const currentData=this.employeeSubject.getValue();
  //  const updateData=[...currentData,empData];
  //  this.employeeSubject.next(updateData);
  //}
  
}
