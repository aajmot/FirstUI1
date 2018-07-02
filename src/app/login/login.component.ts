import { Router } from '@angular/Router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {  }

  ngOnInit() {
  }

  Auth() {
    this.userService.AuthenticateUser();
    this.router.navigate(['/home']);

  }
}
