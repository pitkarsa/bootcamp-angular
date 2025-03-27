import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const checkLoginGuard: CanActivateFn = (route, state) => {
  let router:Router = inject(Router); // dependency injection using inject() within the function

  // alert("check-login guard is working");

  // if the user is logged in then render the expected CartComponent
  // but if the user has not logged in then instead of the CartComponent, render the login component

  const status = localStorage.getItem("login");
  if (status){
    return true; // render the Cart Comp
  } 
  router.navigate(['/login']);
  alert("You need to login first to add the product in cart")
  return false; // do not render the Cart comp
};
