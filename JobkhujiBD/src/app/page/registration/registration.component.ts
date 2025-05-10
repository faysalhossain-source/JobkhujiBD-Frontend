import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegisterComponent {
  registerObj = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    gender: '',
    dob: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Registration data:', this.registerObj);
    // TODO: Add API call here
    this.router.navigate(['/login']); // Redirect to login after success
  }
}
