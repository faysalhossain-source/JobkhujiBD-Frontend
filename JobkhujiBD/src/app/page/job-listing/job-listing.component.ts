import { Component, NgModule, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { JobListingService } from '../../service/job-listing.service';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, CommonModule,],
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
})
export class JobListingComponent implements OnInit {
  jobList: any[] = [];

  applications = [
    {
      applcationStatus: 'Pending',
      emailId: 'example1@email.com',
      fullName: 'Rakib Hasan',
      mobileNo: '017XXXXXXXX'
    },
    {
      applcationStatus: 'Approved',
      emailId: 'example2@email.com',
      fullName: 'Sadia Islam',
      mobileNo: '018XXXXXXXX'
    }
  ];

  

  jobSrv: any;
job: any;

  constructor(private jobService: JobService) {}

  //backend with frontend connectivity if need
  // constructor(private joblst: JobListingService){}

  ngOnInit(): void {
    this.loadJobs();
  }

 loadJobs(): void {
  this.jobSrv.getAllJobs().subscribe({
    next: (res: any) => {
      this.jobList = res;
    },
    error: (err: any) => {
      console.error('Error fetching jobs:', err);
    }
  });
}


  openJobs(job: any): void {
    job.isExpanded = !job.isExpanded;
  }
}
