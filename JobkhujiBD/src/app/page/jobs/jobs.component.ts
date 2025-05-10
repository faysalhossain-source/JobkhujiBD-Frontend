import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent {
  jobList = [
    {
      jobId: 1,
      jobName: 'Frontend Developer',
      companyName: 'ABC Tech',
      logoURL: 'https://via.placeholder.com/50',
      experience: '2-4 years',
      package: '💰 6–8 Lakh Taka Per Year',
      location: 'Dhaka',
    },
    {
      jobId: 2,
      jobName: 'Backend Developer',
      companyName: 'XYZ Solutions',
      logoURL: 'https://via.placeholder.com/50',
      experience: '1-3 years',
      package: '💰 5–7 Lakh Taka Per Year',
      location: 'Chattogram',
    },
    {
      jobId: 3,
      jobName: 'Full Stack Developer',
      companyName: 'Tech Innovators',
      logoURL: 'https://via.placeholder.com/50',
      experience: '3-5 years',
      package: '💰 8–10 Lakh Taka Per Year',
      location: 'Sylhet',
    },
    {
      jobId: 4,
      jobName: 'Data Scientist',
      companyName: 'Data Insights',
      logoURL: 'https://via.placeholder.com/50',
      experience: '2-4 years',
      package: '💰 7–9 Lakh Taka Per Year',
      location: 'Rajshahi',
    },
    {
      jobId: 5,
      jobName: 'UI/UX Designer',
      companyName: 'Creative Minds',
      logoURL: 'https://via.placeholder.com/50',
      experience: '1-2 years',
      package: '💰 4–5 Lakh Taka Per Year',
      location: 'Khulna',
    },
    {
    jobId: 6,
    jobName: 'Frontend Developer',
    companyName: 'ABC Tech',
    logoURL: 'https://via.placeholder.com/50',
    experience: '2-4 years',
    package: '💰 6–8 Lakh Taka Per Year',
    location: 'Dhaka',
  },
  {
    jobId: 7,
    jobName: 'Backend Developer',
    companyName: 'XYZ Solutions',
    logoURL: 'https://via.placeholder.com/50',
    experience: '1-3 years',
    package: '💰 5–7 Lakh Taka Per Year',
    location: 'Chattogram',
  },
  {
    jobId: 8,
    jobName: 'Full Stack Developer',
    companyName: 'Tech Innovators',
    logoURL: 'https://via.placeholder.com/50',
    experience: '3-5 years',
    package: '💰 8–10 Lakh Taka Per Year',
    location: 'Sylhet',
  },
  {
    jobId: 9,
    jobName: 'Data Scientist',
    companyName: 'Data Insights',
    logoURL: 'https://via.placeholder.com/50',
    experience: '2-4 years',
    package: '💰 7–9 Lakh Taka Per Year',
    location: 'Rajshahi',
  },
  {
    jobId: 10,
    jobName: 'UI/UX Designer',
    companyName: 'Creative Minds',
    logoURL: 'https://via.placeholder.com/50',
    experience: '1-2 years',
    package: '💰 4–5 Lakh Taka Per Year',
    location: 'Khulna',
  },
  {
    jobId: 11,
    jobName: 'Mobile App Developer',
    companyName: 'Appify Ltd.',
    logoURL: 'https://via.placeholder.com/50',
    experience: '1-3 years',
    package: '💰 5–6 Lakh Taka Per Year',
    location: 'Dhaka',
  },
  {
    jobId: 12,
    jobName: 'DevOps Engineer',
    companyName: 'CloudNest',
    logoURL: 'https://via.placeholder.com/50',
    experience: '3-5 years',
    package: '💰 9–11 Lakh Taka Per Year',
    location: 'Sylhet',
  },
  {
    jobId: 13,
    jobName: 'QA Engineer',
    companyName: 'Quality Matters',
    logoURL: 'https://via.placeholder.com/50',
    experience: '1-2 years',
    package: '💰 4–6 Lakh Taka Per Year',
    location: 'Barishal',
  },
  {
    jobId: 14,
    jobName: 'Project Manager',
    companyName: 'Innovate360',
    logoURL: 'https://via.placeholder.com/50',
    experience: '5+ years',
    package: '💰 10–12 Lakh Taka Per Year',
    location: 'Dhaka',
  },
  {
    jobId: 15,
    jobName: 'Technical Support Engineer',
    companyName: 'HelpSoft',
    logoURL: 'https://via.placeholder.com/50',
    experience: '0-2 years',
    package: '💰 3–4 Lakh Taka Per Year',
    location: 'Cumilla',
  },
  ];
jobCategories: any;

  openJob(jobId: number) {
    console.log('Opening job with ID:', jobId);
    // You could route to job details here if needed
  }

  applyNow(jobId: number, event: Event) {
    event.stopPropagation(); // prevent card click
    console.log('Apply Now clicked for job ID:', jobId);
    // You can navigate to an apply form page here
  }

  viewDetails(jobId: number, event: Event) {
    event.stopPropagation(); // prevent card click
    console.log('More Details clicked for job ID:', jobId);
    // You can navigate to job details page here
  }
  
}
