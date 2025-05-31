import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {  FormsModule } from '@angular/forms';
import { JobListing } from '../../model/job.model';
import { CreateJobService } from '../../api-call/create-job.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-new-job',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css'],
})
export class CreateNewJobComponent implements OnInit {

    job : JobListing[] = [];

    selectedJob: JobListing | null = null;

   jobs: JobListing = {
    jobTitle: '',
    category: '',
    experience: '',
    pay_scale: '',
    location: '',
    description: '',
    createDate: new Date().toISOString().split('T')[0], // Format: "YYYY-MM-DD"
  };

  constructor(private jobService: CreateJobService) {}

  ngOnInit(): void {
    this.getAll();
  }

  createJobs() {
    this.jobService.createJobs(this.jobs).subscribe({
      next: (response) => {
        alert('Job created successfully!');
      },
      error: (err) => {
        console.error('Job creation failed', err);
      },
    });
  }

  getAll(){
    this.jobService.getAllJobs().subscribe({
        next: (data) => {
            this.job = data;
        },
        error : (err) => {
            console.error('Error fetching jobs', err);     }
     })
  }
 
   deleteJob(id: number) {
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(id).subscribe(() => this.getAll());
    }
  }

  editJob(job: JobListing) {
    // console.log('Editing job:', job);
    this.selectedJob = { ...job };
  }

  updateJob() {
  if (this.selectedJob?.id !== undefined) {
    this.jobService.updateJob(this.selectedJob.id, this.selectedJob).subscribe(() => {
      this.selectedJob = null;
      this.getAll(); // refresh list after update
    });
  }
  }
}
