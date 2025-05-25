import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JobListing } from '../../model/job.model';
import { CreateJobService } from '../../api-call/create-job.service';
import { Router, RouterModule } from '@angular/router';
import { Application, CreateApplyJobService } from '../../servics/create-apply-job.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule,RouterModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit{

   job: JobListing[] = [];

  constructor(private jobService: CreateJobService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }


  apply(jobId: number) {
    this.router.navigate(['/apply/:id'], { queryParams: { companyId: jobId } });
  }
  // apply(jobId: number) {
  //   this.router.navigate(['/apply-form'], { queryParams: { companyId: jobId } });
  // }

  getAll() {
    this.jobService.getAllJobs().subscribe({
      next: (data) => {
        this.job = data;
      },
      error: (err) => {
        console.error('Error fetching jobs', err);
      },
    });
  }


  

    // cancel() {
    // this.showApplyForm = false;
    // // this.selectedJobId = null;
    // }
  }
  // jobs: JobListing[] = [];
  // applyingJob?: JobListing;
  // application: UserApplicationDto = { applicantName: '', email: '', phone: '', resumeLink: '' };
  // message = '';

  // constructor(private jobService: JobService, private applicationService: ApplicationService) {}

  // ngOnInit() {
  //   this.jobService.getJobs().subscribe(jobs => (this.jobs = jobs));
  // }

  // openApplyForm(job: JobListing) {
  //   this.applyingJob = job;
  //   this.application = { applicantName: '', email: '', phone: '', resumeLink: '' };
  //   this.message = '';
  // }

  // submitApplication() {
  //   if (!this.applyingJob) return;

  //   this.applicationService.applyToJob(this.applyingJob.id!, this.application).subscribe({
  //     next: res => {
  //       this.message = res;
  //       this.applyingJob = undefined;
  //     },
  //     error: err => {
  //       this.message = 'Application failed.';
  //     }
  //   });
  // }

  // cancelApplication() {
  //   this.applyingJob = undefined;
  // }
