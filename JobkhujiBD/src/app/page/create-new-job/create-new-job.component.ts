import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-create-new-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    this.jobObj.EmployerId = data.employerId;
    this.loadCategories();
  }

  loadCategories() {
    this.jobSrv.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data || [];
    });
  }

  CreateJob() {
    this.jobSrv.createNewJob(this.jobObj).subscribe((res: any) => {
      if (res.result) {
        this.showToast = true;
        this.resetForm();
        setTimeout(() => this.showToast = false, 4000);
      } else {
        alert('❌ Error: ' + res.message);
      }
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
