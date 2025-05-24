import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JobListing } from '../../model/job.model';
import { CreateJobService } from '../../api-call/create-job.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit{
  jobs: JobListing[] = [];
  applyingJob?: JobListing;
  application: UserApplicationDto = { applicantName: '', email: '', phone: '', resumeLink: '' };
  message = '';

  constructor(private jobService: JobService, private applicationService: ApplicationService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(jobs => (this.jobs = jobs));
  }

  openApplyForm(job: JobListing) {
    this.applyingJob = job;
    this.application = { applicantName: '', email: '', phone: '', resumeLink: '' };
    this.message = '';
  }

  submitApplication() {
    if (!this.applyingJob) return;

    this.applicationService.applyToJob(this.applyingJob.id!, this.application).subscribe({
      next: res => {
        this.message = res;
        this.applyingJob = undefined;
      },
      error: err => {
        this.message = 'Application failed.';
      }
    });
  }

  cancelApplication() {
    this.applyingJob = undefined;
  }
}
