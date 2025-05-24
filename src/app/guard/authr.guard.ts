import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authrGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  let getDt=localStorage.getItem('userName');
  if(getDt !==null){
    return true;
  }
  else{
    router.navigateByUrl("/login");
    return false;
  }
 
};
