import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  AuthenticateUser() {
    console.log('login service method called');
  }

}
