import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoggedIn: boolean;
  constructor() {
    this.isLoggedIn = true;
   }


  AuthenticateUser() {
    console.log('login service method called');
  }

}
