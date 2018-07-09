import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _isLoggedIn: boolean;

  ngInit() {
    this._isLoggedIn = false;
  }

  Constructor() {
    this._isLoggedIn = false;
  }
  getIsLoggedIn() {
    return this._isLoggedIn;
  }
  setIsloggedIn(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }
}
