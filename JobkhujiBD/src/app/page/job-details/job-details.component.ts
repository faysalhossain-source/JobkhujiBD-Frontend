import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-details',
  imports: [NgIf],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  @Input() jobObj: any;
  @Input() isLoggedIn: boolean = false;

  apply() {
    // এখানে তুমি ইচ্ছা মতো apply করার logic লিখবে
    console.log('User applied for job:', this.jobObj?.jobName);
    alert('আপনি সফলভাবে আবেদন করেছেন!');
  }
}
