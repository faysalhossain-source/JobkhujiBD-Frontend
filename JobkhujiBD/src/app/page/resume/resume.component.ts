import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule,NgFor,NgIf,FormsModule],
  selector: 'app-resume-writing-service',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
scrollToTop() {
throw new Error('Method not implemented.');
}
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}
  // Packages Data
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

  // Benefits Data
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

  // Testimonials Data
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

  // Resume Samples Data
  resumeSamples = [
    {
      id: 1,
      imageUrl: 'https://static.naukimg.com/s/0/0/i/manual-resume/sample-resumes/p1L.png',
      altText: 'Professional Resume Sample 1'
    },
    {
      id: 2,
      imageUrl: 'https://static.naukimg.com/s/0/0/i/manual-resume/sample-resumes/p2L.png',
      altText: 'Professional Resume Sample 2'
    },
    {
      id: 3,
      imageUrl: 'https://static.naukimg.com/s/0/0/i/manual-resume/sample-resumes/p3L.png',
      altText: 'Creative Resume Sample 3'
    },
    {
      id: 4,
      imageUrl: 'https://static.naukimg.com/s/0/0/i/manual-resume/sample-resumes/p4L.png',
      altText: 'Executive Resume Sample 4'
    },
    {
      id: 5,
      imageUrl: 'https://static.naukimg.com/s/0/0/i/manual-resume/sample-resumes/p5L.png',
      altText: 'Modern Resume Sample 5'
    },
    {
      id: 6,
      imageUrl: 'https://static.naukimg.com/s/0/0/i/manual-resume/sample-resumes/p6L.png',
      altText: 'Creative Resume Sample 6'
    }
  ];

  // Component State
  selectedPackage: any = null;
  currentResumeIndex = 0;
  visibleResumeItems = 4;
formData: any;

  // Package Methods
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

  // Resume Carousel Methods
  get visibleResumes() {
    return this.resumeSamples.slice(this.currentResumeIndex, this.currentResumeIndex + this.visibleResumeItems);
  }

  prevResumeSlide(): void {
    this.currentResumeIndex = Math.max(0, this.currentResumeIndex - 1);
  }

  nextResumeSlide(): void {
    this.currentResumeIndex = Math.min(
      this.resumeSamples.length - this.visibleResumeItems, 
      this.currentResumeIndex + 1
    );
  }

  downloadResume(sampleId: number): void {
    console.log(`Downloading resume ${sampleId}`);
    // Implement actual download logic
  }

  viewResume(sampleId: number): void {
    console.log(`Viewing resume ${sampleId}`);
    // Implement actual view logic
  }

  // Helper method for star ratings
  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i);
  }
}