import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../service/job.service';
import { JobListingService } from '../../service/job-listing.service';

@Component({
  selector: 'app-create-new-job',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css'],
})
export class CreateNewJobComponent{
   jobForm: FormGroup;

  constructor(private fb: FormBuilder, private jobService: JobListingService) {
    this.jobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      category: ['', Validators.required],
      experience: ['', Validators.required],
      pay_scale: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      createDate: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.jobService.createJob(this.jobForm.value).subscribe({
        next: (response) => alert('Job Created Successfully!'),
        error: (err) => console.error('Job creation failed:', err)
      });
    }
  }
 
}
