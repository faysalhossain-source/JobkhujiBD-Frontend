import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj = {
    UserName: '',
    Password: ''
  };

  onLogin() {
    console.log('Login clicked:', this.loginObj);
    // TODO: Call your backend API here
  }
}
