import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() showHeader = true;

  showConfirmation = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmLogout() {
    this.showConfirmation = true;


  }

  logout() {

    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("employeeId");
    localStorage.removeItem("password");

    if (this.showConfirmation === true) {
      this.router.navigate(['/login']);
    }

    this.showConfirmation = false;


  }
  cancelLogout() {
    this.showConfirmation = false;



  }

}