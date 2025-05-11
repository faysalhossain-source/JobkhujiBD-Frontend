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
    selector: 'app-mnc',
  templateUrl: './mnc.component.html',
  styleUrls: ['./mnc.component.css'],
  standalone: true,
  imports: [RouterLink,NgFor,RouterModule]
})
export class Mncjobs implements OnInit {

  jobs: Job[] = [];

  ngOnInit(): void {
    this.jobs = [
      {
      id: 1,
      name: 'Unilever Bangladesh Ltd.',
      image: 'mnc/unilever.jpg',
      description: 'Shape a better future with sustainable innovation.',
       externalLink: 'https://www.unilever.com.bd/'
    },
    {
      id: 2,
      name: 'Nestlé Bangladesh',
      image: 'mnc/nestle.jpg',
      description: 'Join Nestlé to make an impact through nutrition, health, and wellness.',
      externalLink: 'https://www.nestle.com.bd/'
    },
    {
      id: 3,
      name: 'PwC Bangladesh',
      image: 'mnc/pwc.webp',
      description: 'Be a part of world-class consulting projects and innovation.',
    },
    {
      id: 4,
      name: 'Coca-Cola Bangladesh',
      image: 'mnc/Coca-Cola.jpg',
      description: 'Join us to refresh the world and make a difference.',
      externalLink: 'https://www.cokecce.com/'
    },
    {
      id: 5,
      name: 'PepsiCo Bangladesh',
      image: 'mnc/pepsico.jpg',
      description: 'Join us to create more smiles with every sip and every bite.',
      externalLink: 'https://www.pepsico.com/'
    },
    {
      id: 6,
      name: 'Dell Technologies Bangladesh',
      image: 'mnc/dell.jpeg',
      description: 'Join us to build a better future with technology.',
      externalLink: 'https://www.dell.com/en-us'
    },
    {
      id: 7,
      name: 'IBM Bangladesh',
      image: 'mnc/ibm.jpeg',
      description: 'Join us to create innovative solutions for the world.',
      externalLink: 'https://www.ibm.com/bd-en'
    }
    ];
  }
}
