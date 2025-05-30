import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application, CreateApplyJobService } from '../../servics/create-apply-job.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-apply-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './apply-form.component.html'
})
export class ApplyFormComponent {
  application: Application = {
    companyId: '',
    fullName: '',
    email: '',
    resumePath: '',
  };
  constructor(private createApply: CreateApplyJobService,
      private router: Router
      ,private route: ActivatedRoute,) {
      this.route.queryParams.subscribe(params => {
      this.application.companyId = params['companyId'] || '';
    });
  }

  submit() {
    // Convert Application object to FormData
    const formData = new FormData();
    formData.append('companyId', this.application.companyId);
    formData.append('fullName', this.application.fullName);
    formData.append('email', this.application.email);
    formData.append('resumePath', this.application.resumePath);

    this.createApply.submitApplication(formData).subscribe({
      next: () => {
      alert('Application submitted!');
      this.router.navigate(['/']);
      },
      error: (err) => {
      console.error('Submission failed', err);
      alert('Something went wrong!');
      }
    });
  }
 
}
