import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

  constructor(private jobSrv: JobService) {
    const userData = localStorage.getItem('jobLoginUser');
    if (userData) {
      const data = JSON.parse(userData);
      this.jobObj.EmployerId = data.employerId;
    }
  }

  ngOnInit(): void {
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
        alert('চাকরির পোস্ট সফলভাবে তৈরি হয়েছে!');
        // If possible, reset the form here or navigate to another route.
      } else {
        alert('ত্রুটি: ' + res.message);
      }
    });
  }
}
