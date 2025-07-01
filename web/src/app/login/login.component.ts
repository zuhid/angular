import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zc-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public model: any = {
    username: "admin@company.com",
    password: "P@ssw0rd",
  };

  constructor(private router: Router) { }

  login() {
    this.router.navigate(["/crm"]);
  }
}
