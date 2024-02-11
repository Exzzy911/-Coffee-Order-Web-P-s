import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeId: any = '';
  password: any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onLoginClick() {
    if (this.employeeId.trim() === '' || this.password.trim() === '') {
      alert('please enter both Employee Id and Password.');
    } else {
      if (this.employeeId === '535' && this.password === '1234') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('employeeId', this.employeeId);
        localStorage.setItem('password', this.password);

        this.router.navigate(['/home']);
      }
      else {
        alert('Invalid Employee Id or Password')
      }
    }

  }

}