import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navber.component.html', // Corrected file name to match the folder structure
  styleUrls: ['./navber.component.css'], // Corrected file name to match the folder structure
  standalone: true,
  imports: [CommonModule, RouterLink]// Add any necessary imports here
})
export class NavbarComponent {
isCollapsed: any;
navigateToMembership() {
throw new Error('Method not implemented.');
}
  isLoggedIn = false; // Default not logged in
  userInfo: any = null;

  constructor(private router: Router) {
    // Mock data, pore service theke niye asbe
    this.isLoggedIn = true;
    this.userInfo = {
      userName: 'Faysal',
      userRole: 'Employer' // Or 'JobSeeker'
    };
  }

  logoff() {
    this.isLoggedIn = false;
    this.userInfo = null;
    console.log('Logged off');
  }
  
}
