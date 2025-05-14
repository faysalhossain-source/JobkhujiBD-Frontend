import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule,NgFor],
  selector: 'app-resume-writing-service',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  packages = [
    {
      name: 'Basic',
      price: '$1,999',
      features: [
        'ATS Optimized Resume',
        '1 Industry Specific Version',
        'Basic Cover Letter',
        '48 Hours Delivery'
      ],
      bestFor: 'Freshers & Entry Level'
    },
    {
      name: 'Standard',
      price: '$2,999',
      features: [
        'ATS Optimized Resume',
        '2 Industry Specific Versions',
        'Customized Cover Letter',
        'LinkedIn Profile Update',
        '24 Hours Delivery'
      ],
      bestFor: 'Mid-Level Professionals',
      popular: true
    },
    {
      name: 'Premium',
      price: '$3,999',
      features: [
        'ATS Optimized Resume',
        '3 Industry Specific Versions',
        'Customized Cover Letter',
        'LinkedIn Profile Makeover',
        'Thank You Letter',
        '8 Hours Priority Delivery'
      ],
      bestFor: 'Senior Professionals'
    }
  ];

  benefits = [
    {
      icon: 'fa-file-alt',
      title: 'ATS Friendly Resume',
      description: 'Resumes optimized for Applicant Tracking Systems'
    },
    {
      icon: 'fa-user-tie',
      title: 'Industry Experts',
      description: 'Resumes crafted by HR professionals & industry experts'
    },
    {
      icon: 'fa-clock',
      title: 'Quick Turnaround',
      description: 'Get your resume delivered in as fast as 8 hours'
    },
    {
      icon: 'fa-edit',
      title: 'Unlimited Revisions',
      description: 'Get revisions until you are satisfied'
    }
  ];

  testimonials = [
    {
      name: 'Md. Faysal hossain',
      role: 'Software Engineer at TCS',
      content: 'Got 3 interview calls within a week of using the resume service. Highly recommended!',
      rating: 5
    },
    {
      name: 'Fahmida Islam',
      role: 'Marketing Executive at HDFC',
      content: 'The resume writer understood my profile perfectly and highlighted my strengths.',
      rating: 4
    },
    {
      name: 'Samiul Islam',
      role: 'Banking Professional',
      content: 'Worth every penny. My resume looks professional and gets me noticed.',
      rating: 5
    }
  ];

  selectedPackage: any = null;

  scrollToPackages(): void {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  selectPackage(pkg: any): void {
    this.selectedPackage = pkg;
  }

  submitForm(): void {
    alert(`Thank you for selecting ${this.selectedPackage.name} package! Our team will contact you shortly.`);
    this.selectedPackage = null;
  }
}
