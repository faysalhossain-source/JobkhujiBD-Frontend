import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  constructor(private router: Router) {}
  // Function to handle login
  // This function is called when the login button is clicked

 onLogin() {
  if (!this.loginObj.UserName || !this.loginObj.Password) {
    alert('Please enter both email and password.');
    return;
  }

  // Dummy login validation
  const dummyUser = {
    UserName: this.loginObj.UserName,
    role: this.loginObj.UserName.includes('employer') ? 'EMPLOYER' : 'JOBSEEKER',
    employerId: 101
  };

  localStorage.setItem('jobLoginUser', JSON.stringify(dummyUser));

  if (dummyUser.role === 'EMPLOYER') {
    this.router.navigate(['/create-new-job']);
  } else {
    this.router.navigate(['/jobs']);
  }
}

}
