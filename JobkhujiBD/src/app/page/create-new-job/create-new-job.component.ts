import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-create-new-job',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css'],
})
export class CreateNewJobComponent implements OnInit {

  jobObj: any = {
    JobId: 0,
    JobName: '',
    CreatedDate: new Date(),
    EmployerId: 0,
    CategoryId: null,
    Experience: '',
    Package: '',
    Location: '',
    JobDescription: '',
    IsActive: true,
  };

  categoryList: any[] = [];
  showToast: boolean = false;

  constructor(private jobSrv: JobService, private router: Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('jobLoginUser');
    if (!userData) {
      alert('⚠️ You need to login first to post a job!');
      this.router.navigate(['/login']);
      return;
    }

    const data = JSON.parse(userData);

    // Check user role
    const userRole = data.role?.toUpperCase();
    if (userRole !== 'EMPLOYER' && userRole !== 'ADMIN') {
      alert('❌ Only Employer or Admin can create new jobs!');
      this.router.navigate(['/login']);
      return;
    }

    this.jobObj.EmployerId = data.employerId;
    this.loadCategories();
  }

  loadCategories() {
    this.jobSrv.getAllCategory().subscribe({
      next: (res: any) => {
        this.categoryList = res.data || [];
        console.log('Fetched categories:', this.categoryList); // Debug
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      },
    });
  }

  CreateJob() {
    this.jobSrv.createNewJob(this.jobObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.showToast = true;
          this.resetForm();
          setTimeout(() => (this.showToast = false), 4000);
        } else {
          alert('❌ Error: ' + res.message);
        }
      },
      error: (err) => {
        alert('❌ Error: ' + err.message);
      },
    });
  }

  closeToast() {
    this.showToast = false;
  }

  resetForm() {
    this.jobObj = {
      JobId: 0,
      JobName: '',
      CreatedDate: new Date(),
      EmployerId: this.jobObj.EmployerId,
      CategoryId: null,
      Experience: '',
      Package: '',
      Location: '',
      JobDescription: '',
      IsActive: true,
    };
  }
}
