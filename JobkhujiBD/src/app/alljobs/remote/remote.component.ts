import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';



interface LocalJob {
  id: number;
  name: string;
  description?: string;
  image?: string;
}

@Component({
  selector: 'app-remote-jobs',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css'],
  standalone: true,
  imports: [RouterModule, NgFor, RouterLink,]
})
export class RemoteJobsComponent implements OnInit {

  jobs: LocalJob[] = [];

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.jobs = [
      {
        id: 1,
        name: 'Frontend Developer',
        description: 'Build beautiful UIs using Angular and TailwindCSS.',
        image: 'remote/frontend.jpeg'
      },
      {
        id: 2,
        name: 'Remote Data Analyst',
        description: 'Analyze and visualize data for real-time dashboards.',
        image: 'remote/data-analyst.jpg'
      },
      {
        id: 3,
        name: 'Virtual Assistant',
        description: 'Provide online administrative support to our global clients.',
        image: 'remote/virtual-assistant.jpeg'
      },
      {
        id: 4,
        name: 'Remote Web Developer',
        description: 'Build and maintain websites using modern web technologies.',
        image: 'remote/web-develope.jpg'
      },
      {
        id: 5,
        name: 'Content Writer',
        description: 'Create engaging written content for blogs, websites, and marketing materials.',
        image: 'remote/content-writer.jpg'
      },
      {
        id: 6,
        name: 'SEO Specialist',
        description: 'Optimize websites to improve search engine rankings and traffic.',
        image: 'remote/seo-specialist.jpg'
      },
      {
        id: 7,
        name: 'Online Tutor',
        description: 'Teach various subjects remotely to students of all ages.',
        image: 'remote/online-tutor.jpg'
      },
      {
        id: 8,
        name: 'Social Media Manager',
        description: 'Create and manage social media strategies and campaigns for brands.',
        image: 'remote/social-media-manager.jpg'
      },
      {
        id: 9,
        name: 'Remote Customer Support',
        description: 'Provide customer service and support via chat, email, or phone.',
        image: 'remote/customer-support.jpg'
      },
      {
        id: 10,
        name: 'UX/UI Designer',
        description: 'Design user-friendly interfaces and experiences for web and mobile applications.',
        image: 'remote/ux-ui-designer.jpg'
      },
      {
        id: 11,
        name: 'Digital Marketing Specialist',
        description: 'Manage online marketing campaigns to drive traffic and increase conversions.',
        image: 'remote/digital-marketing.jpg'
      },
      {
        id: 12,
        name: 'Online Sales Representative',
        description: 'Sell products or services online and manage client relationships.',
        image: 'remote/online-sales.jpg'
      },
      {
        id: 13,
        name: 'Video Editor',
        description: 'Edit and produce video content for various online platforms.',
        image: 'remote/video-editor.jpg'
      }
    ];
  }
  viewJobDetails(job: LocalJob): void {
    this.router.navigate(['/remotejob-details', job.id]);
  }
}
