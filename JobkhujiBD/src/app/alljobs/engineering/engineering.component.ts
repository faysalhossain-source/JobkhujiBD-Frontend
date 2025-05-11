import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

interface Job {
  id: number;
  name: string;
  description?: string;
  image?: string;
  externalLink?: string;
}

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css'],
  standalone: true,
  imports: [RouterLink, NgFor, RouterModule]
})
export class EngineeringJobs implements OnInit {
  jobs: Job[] = [];

  ngOnInit(): void {
    this.jobs = [
      {
        id: 1,
        name: 'Tata Consultancy Services (TCS)',
        image: 'Engr/engineering tcs.jpeg',
        description: 'Shape the future with cutting-edge engineering solutions.',
        externalLink: 'https://www.tcs.com/careers'
      },
      {
        id: 2,
        name: 'Siemens Bangladesh',
        image: 'Engr/Siemens Bangladesh.jpeg',
        description: 'Drive innovation in automation, electrification, and digitalization.',
        externalLink: 'https://new.siemens.com/bd/en/company/jobs.html'
      },
      {
        id: 3,
        name: 'Larsen & Toubro (L&T) Bangladesh',
        image: 'Engr/(L&T).png',
        description: 'Contribute to large-scale infrastructure projects across the globe.',
      },
      {
        id: 4,
        name: 'Schneider Electric Bangladesh',
        image: 'Engr/Schneider Electric.jpeg',
        description: 'Empower the world with sustainable energy and automation.',
        externalLink: 'https://www.se.com/bd/en/'
      },
      {
        id: 5,
        name: 'General Electric (GE) Bangladesh',
        image: 'Engr/General Electric (GE) Bangladesh.jpeg',
        description: 'Create solutions that build a better world with advanced technology.',
        externalLink: 'https://www.ge.com/careers'
      },
      {
        id: 6,
        name: 'Honeywell Bangladesh',
        image: 'Engr/Honeywell Bangladesh.webp',
        description: 'Innovate to solve the world’s toughest challenges in engineering.',
        externalLink: 'https://www.honeywell.com/en-us/careers'
      },
      {
        id: 7,
        name: 'Bosch Bangladesh',
        image: 'Engr/Bosch Bangladesh.webp',
        description: 'Be part of a leading global engineering and technology company.',
        externalLink: 'https://www.bosch.com/careers/'
      }
    ];
  }
}
