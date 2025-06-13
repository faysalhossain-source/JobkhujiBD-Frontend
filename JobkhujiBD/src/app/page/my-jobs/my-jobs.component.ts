import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsService } from '../../servics/my-jobs.service';
import { MyJob } from '../../model/job.model';




@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css'],
  providers: [MyJobsService],
  imports: [CommonModule],
  standalone: true
})
export class MyJobsComponent implements OnInit {

  appliedJobs: MyJob[] = [];
  authService: any;

  constructor(private myJobsService: MyJobsService) {}

  ngOnInit(): void {
    const email = this.authService.getLoggedInUserEmail();  // ✅ ekhane login kora user's email boshao
    this.myJobsService.getMyAppliedJobs(email).subscribe({
      next: (data: MyJob[]) => {
        this.appliedJobs = data;
      },
      error: (err: any) => {
        console.error('Failed to load applied jobs:', err);
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'applied': return 'bg-primary text-white';
      case 'accepted': return 'bg-success text-white';
      case 'rejected': return 'bg-danger text-white';
      default: return 'bg-secondary text-white';
    }
  }
}
