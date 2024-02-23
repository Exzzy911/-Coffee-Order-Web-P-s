declare var google: any
import { Component, OnInit, } from '@angular/core';
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

  onClick(employeeId: any, password: any) {
    console.log('EmployeeId:', employeeId);
    console.log('Password:', password);
  }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '504051144816-pof4rnb2iffb947i18gbm9grujqf5v97.apps.googleusercontent.com',
      callback: (resp: any)=> {
        console.log(resp);
        this.router.navigate(['/home']);
      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_black',
      size: 'larger',
      shape: 'circle',
      width: 310
    })

  } 

}