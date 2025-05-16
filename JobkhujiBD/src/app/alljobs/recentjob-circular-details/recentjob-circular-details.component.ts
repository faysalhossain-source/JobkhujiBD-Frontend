// job-listings.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  deadline: string;
  level: string;
}

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './recentjob-circular-details.component.html',
  styleUrl: './recentjob-circular-details.component.css'
})
export class RecenJobcircularComponent {
  selectedJobType: string = '';
  selectedLevel: string = '';
  selectedDivision: string = '';
  searchQuery: string = '';
  locationQuery: string = '';
  get filteredJobs(): Job[] {
    return this.jobs.filter((job: { type: string; level: string; title: string; company: string; location: string; }) => {
      const matchesType = !this.selectedJobType || job.type === this.selectedJobType;
      const matchesLevel = !this.selectedLevel || job.level === this.selectedLevel;
      const matchesSearch = !this.searchQuery || 
        job.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesLocation = !this.locationQuery || 
        job.location.toLowerCase().includes(this.locationQuery.toLowerCase());
      
      return matchesType && matchesLevel && matchesSearch && matchesLocation;
    });
  }

  clearFilters(): void {
    this.selectedJobType = '';
    this.selectedLevel = '';
    this.selectedDivision = '';
    this.searchQuery = '';
    this.locationQuery = '';
  }

  constructor(private router: Router) {}
   jobs: Job[] = [
    {
      id: 'F5zOyEVk',
      title: 'Intern, Service Operations (BPO) - Quantigo AI',
      company: 'Quantigo AI',
      logo: 'https://studio.skill.jobs/media/images/undefined_4GrcyDg.png',
      location: 'Sector 3, Uttara, Dhaka',
      type: 'Internship',
      salary: 'Negotiable',
      deadline: 'May 19, 2025',
      level: 'Beginner'
    },
    {
      id: 'iGP0J3PP',
      title: 'Intern, Human Resources - Quantigo AI',
      company: 'Quantigo AI',
      logo: 'https://studio.skill.jobs/media/images/undefined_lJWATjz.png',
      location: 'Uttara, Dhaka',
      type: 'Internship',
      salary: 'Negotiable',
      deadline: 'May 19, 2025',
      level: 'Beginner'
    },
    {
      id: 'uzdgHATl',
      title: 'Senior Executive, Payroll & HR Operations - Quantigo AI',
      company: 'Quantigo AI',
      logo: 'https://studio.skill.jobs/media/images/undefined_JlS3aMU.png',
      location: 'Uttara, Dhaka',
      type: 'Full Time',
      salary: 'Negotiable',
      deadline: 'May 19, 2025',
      level: 'Beginner'
    },
    {
      id: 'nXK3dFgL',
      title: 'Junior Web Developer - TechHive Solutions',
      company: 'TechHive Solutions',
      logo: 'https://studio.skill.jobs/media/images/undefined_1A2B3CD.png',
      location: 'Banani, Dhaka',
      type: 'Full Time',
      salary: '25,000 - 35,000 BDT',
      deadline: 'May 25, 2025',
      level: 'Beginner'
    },
    {
      id: 'zLK8ReP0',
      title: 'Marketing Executive - GigaTech Ltd.',
      company: 'GigaTech Ltd.',
      logo: 'https://studio.skill.jobs/media/images/undefined_2D3E4FG.png',
      location: 'Dhanmondi, Dhaka',
      type: 'Full Time',
      salary: '30,000 BDT',
      deadline: 'May 30, 2025',
      level: 'Intermediate'
    },
    {
      id: 'aBCd1234',
      title: 'Graphic Designer - CreativeArt Studio',
      company: 'CreativeArt Studio',
      logo: 'https://studio.skill.jobs/media/images/undefined_3F4G5HI.png',
      location: 'Mirpur, Dhaka',
      type: 'Part Time',
      salary: '15,000 - 20,000 BDT',
      deadline: 'June 1, 2025',
      level: 'Beginner'
    },
    {
      id: 'r5Tg6Hy8',
      title: 'Customer Service Representative - FastCall',
      company: 'FastCall',
      logo: 'https://studio.skill.jobs/media/images/undefined_4G5H6IJ.png',
      location: 'Mohakhali, Dhaka',
      type: 'Full Time',
      salary: 'Negotiable',
      deadline: 'June 5, 2025',
      level: 'Beginner'
    },
    {
      id: 'tY89Lp09',
      title: 'Data Entry Operator - DataBridge Ltd.',
      company: 'DataBridge Ltd.',
      logo: 'https://studio.skill.jobs/media/images/undefined_5H6I7JK.png',
      location: 'Baridhara, Dhaka',
      type: 'Contractual',
      salary: '18,000 BDT',
      deadline: 'June 10, 2025',
      level: 'Beginner'
    },
    {
      id: 'oPl3NhU0',
      title: 'Mobile App Developer (Android) - AppCore Bangladesh',
      company: 'AppCore Bangladesh',
      logo: 'https://studio.skill.jobs/media/images/undefined_6I7J8KL.png',
      location: 'Gulshan, Dhaka',
      type: 'Full Time',
      salary: '50,000 BDT',
      deadline: 'June 15, 2025',
      level: 'Experienced'
    },
    {
      id: 'vCx9Ulmn',
      title: 'Frontend Developer - UIWorks',
      company: 'UIWorks',
      logo: 'https://studio.skill.jobs/media/images/undefined_7J8K9LM.png',
      location: 'Panthapath, Dhaka',
      type: 'Remote',
      salary: '40,000 BDT',
      deadline: 'June 20, 2025',
      level: 'Intermediate'
    },
    {
      id: 'bYt8GrX2',
      title: 'Backend Developer - CloudNext Ltd.',
      company: 'CloudNext Ltd.',
      logo: 'https://studio.skill.jobs/media/images/undefined_8LMNOPQ.png',
      location: 'Mohammadpur, Dhaka',
      type: 'Full Time',
      salary: '60,000 BDT',
      deadline: 'June 25, 2025',
      level: 'Experienced'
    },
    {
      id: 'qW9eRt56',
      title: 'Digital Marketing Executive - Webify',
      company: 'Webify',
      logo: 'https://studio.skill.jobs/media/images/undefined_9MNOPQR.png',
      location: 'Shyamoli, Dhaka',
      type: 'Full Time',
      salary: '28,000 - 35,000 BDT',
      deadline: 'June 30, 2025',
      level: 'Intermediate'
    }
    // Add more job objects here if needed...
  ];

 apply() {
  const isLoggedIn = !!localStorage.getItem('token');
  if (isLoggedIn) {
    this.router.navigate(['/apply-form']);
  } else {
    this.router.navigate(['/login'], { queryParams: { returnUrl: '/apply-form' } });
  }
}

}
