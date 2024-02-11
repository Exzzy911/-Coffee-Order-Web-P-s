import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }
  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  }

}
