// import { Injectable } from '@angular/core';
// import { Job } from '../models/recent-job-listing.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobService {
//   private recentJobs: Job[] = [
//     {
//       id: '1',
//       title: 'Frontend Developer',
//       company: 'Tech Solutions Ltd.',
//       logo: 'assets/logos/tech-solutions.png',
//       description: 'We are looking for a skilled frontend developer...',
//       experienceLevel: 'Mid Level',
//       deadline: '2023-12-31',
//       salary: '৳60,000 - ৳80,000',
//       location: 'Dhaka',
//       requirements: ['3+ years experience', 'React expertise'],
//       responsibilities: ['Develop user interfaces', 'Optimize performance'],
//       postedDate: new Date('2023-11-01')
//     },
//     // আরও জব যোগ করুন
//   ];

//   getRecentJobs(): Job[] {
//     return this.recentJobs;
//   }

//   getJobById(id: string): Job | undefined {
//     return this.recentJobs.find(job => job.id === id);
//   }
// }