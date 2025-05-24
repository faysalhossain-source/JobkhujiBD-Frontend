import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-job',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css'],
  imports: [NgFor,NgIf,CommonModule],
})
export class MyJobsComponent {
  appliedJobs = [
    {
      title: 'Frontend Developer',
      company: 'TechSoft Ltd.',
      location: 'Dhaka, Bangladesh',
      appliedDate: new Date('2024-05-15'),
      status: 'Applied'
    },
    {
      title: 'Backend Engineer',
      company: 'InnovaTech',
      location: 'Remote',
      appliedDate: new Date('2024-05-18'),
      status: 'Under Review'
    },
    {
      title: 'Full Stack Developer',
      company: 'NextGen IT',
      location: 'Chattogram',
      appliedDate: new Date('2024-05-20'),
      status: 'Shortlisted'
    }
  ];

  getStatusClass(status: string): string {
    const s = status.toLowerCase().replace(/\s/g, '-');
    return `status-${s}`;
  }
}
