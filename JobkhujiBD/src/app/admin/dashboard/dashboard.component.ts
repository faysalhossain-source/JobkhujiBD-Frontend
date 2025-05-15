import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../service/auth.service';  // Assuming you have an AuthService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}
  // Example data to show in cards
  totalUsers: number = 120;
  totalEmployers: number = 30;
  totalJobs: number = 45;
  totalApplications: number = 200;

  // constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // You can fetch this data from an API (e.g., AuthService)
    // For now, the data is hardcoded.
  }

  // logout() {
  //   this.authService.logout();  // You should define this method in your AuthService
  //   this.router.navigate(['/login']);
  // }
}
