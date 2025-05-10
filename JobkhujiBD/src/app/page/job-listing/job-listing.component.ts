import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
  imports: [CommonModule],
})
export class JobListingComponent {
  jobList = [
    { jobName: 'Software Engineer', categoryName: 'IT', package: '30k-50k', experience: '2 Years', location: 'Dhaka', isExpanded: false },
    { jobName: 'Accountant', categoryName: 'Finance', package: '20k-40k', experience: '1 Year', location: 'Chittagong', isExpanded: false }
  ];

  applications = [
    { applcationStatus: 'Pending', emailId: 'example1@email.com', fullName: 'Rakib Hasan', mobileNo: '017XXXXXXXX' },
    { applcationStatus: 'Approved', emailId: 'example2@email.com', fullName: 'Sadia Islam', mobileNo: '018XXXXXXXX' }
  ];
job: any;

  openJobs(job: any) {
    job.isExpanded = !job.isExpanded;
  }
}
