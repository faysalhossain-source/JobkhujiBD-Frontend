import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Application,
  CreateApplyJobService,
} from '../../servics/create-apply-job.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-apply-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './apply-form.component.html',
})
export class ApplyFormComponent {
  application: Application = {
    companyId: '',
    fullName: '',
    email: '',
    resumePath: null,
  };

  constructor(
    private createApply: CreateApplyJobService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.application.companyId = params['companyId'] || '';
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.application.resumePath = file;
    }
  }

  submit() {
    // Convert Application object to FormData
    const formData = new FormData();
    formData.append('companyId', this.application.companyId);
    formData.append('fullName', this.application.fullName);
    formData.append('email', this.application.email);

    if (this.application.resumePath) {
      formData.append('resumePath', this.application.resumePath);
    } else {
      alert('Please upload a resume before submitting.');
      return;
    }

    this.createApply.submitApplication(formData).subscribe({
      next: () => {
        alert('Application submitted!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Submission failed', err);
        alert('Something went wrong!');
      },
    });
  }
}
