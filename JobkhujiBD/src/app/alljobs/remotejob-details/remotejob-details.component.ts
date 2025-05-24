import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-remotejob-details',
  templateUrl: './remotejob-details.component.html',
  standalone: true,
  imports: [NgIf,CommonModule],
})
export class RemoteJobDetailsComponent {
  // // job: Job | null = null;

  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   // Get the job data from router state or history state.
  //   const nav = this.router.getCurrentNavigation()?.extras.state;
  //   if (nav?.['job']) {
  //     this.job = nav['job']; // Pass job data if available.
  //   } else {
  //     // If job is not found, fallback to a default route.
  //     this.router.navigate(['/apply-form']);
  //   }
  }

  // applyNow(): void {
  //   const isLoggedIn = localStorage.getItem('token') !== null;
  //   if (isLoggedIn) {
  //     this.router.navigate(['/apply-form'], { state: { job: this.job } });
  //   } else {
  //     this.router.navigate(['/register']);
  //   }
  // }

