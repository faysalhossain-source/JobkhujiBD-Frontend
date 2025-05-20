

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../Registration/registration.service';
//import { RegistrationService } from '../../../core/registration.service'; // ✅ adjust path if needed

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegisterComponent {
  registerObj = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    //confirmPassword: '',
    phoneNumber: '',
    gender: '',
    //dob: ''
  };

  constructor(
    private router: Router,
    private registrationService: RegistrationService // ✅ Inject service
  ) {}

  onSubmit() {
    console.log('Sending registration data:', this.registerObj);

    this.registrationService.postData(this.registerObj).subscribe({
      next: () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Registration Success.');
      }
    });
  }
}




/*

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
*/