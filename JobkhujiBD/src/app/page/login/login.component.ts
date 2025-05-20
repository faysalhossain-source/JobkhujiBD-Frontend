


import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showOverlay = true;

  email = '';
  password = '';
loginObj: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  closeOverlay() {
    this.showOverlay = false;
  }

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res: { access_token: any }) => {
          this.auth.setToken(res.access_token);

          const role = this.auth.getUserRole(); // ✅ Make sure this method exists

          // Role-based navigation
          switch (role) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;

            case 'user':
              this.router.navigate(['/user']);
              break;

            default:
              alert('Unknown role. Please contact support.');
          }
        },
        error: (error: any) => {
          alert('Invalid credentials');
          console.log(error);
        }
      });
  }
}








/**
 * 
 * import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { AuthService } from '../../core/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-loging',
  standalone:true,
  imports: [NgIf, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LogingComponent {

  showOverlay = true;
loginObj: any;

  closeOverlay() {
    this.showOverlay = false;
  }

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res: { access_token: any; }) => {
          this.auth.setToken(res.access_token);
          this.router.navigate(['/home']);
          // const role = this.auth.getUserRole();

          //role based navigation
          switch(role){
            case 'admin':
              window.location.href="/admin";

              break;

            case 'user':
              window.location.href="/user";
              break;

            default:
              alert('Unknow role. Please contact support.');  
          }
        },
        error: (error: any) => {
          alert('Invalid credentials')
          console.log(error)
        }
      });
  }
}
 * 
 */