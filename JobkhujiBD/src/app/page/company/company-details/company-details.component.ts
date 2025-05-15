import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
  standalone: true,
  imports: [CommonModule]
   // Importing NgIf and RouterLink for routing and conditional rendering
  
})
export class CompanyDetailsComponent implements OnInit {
scrollToTop() {
throw new Error('Method not implemented.');
}
openMap(arg0: any) {
throw new Error('Method not implemented.');
}
  company: any;
  companyId: string | null = '';

companies = [
  {
    id: 'cube-holdings',
    name: 'Cube Holdings Ltd.',
    imageUrl: 'top job/Cube Holdings logo.png',
    description: 'Cube Holdings is a top tech company in Bangladesh...',
    website: 'https://www.cube.com.bd',
    applyUrl: 'https://careers.cube.com.bd'
  },
  {
    id: 'eskayef',
    name: 'Eskayef Pharmaceuticals Ltd',
    imageUrl: 'top job/eskayef logo.png',
    description: 'Eskayef is a leading pharma company in Bangladesh...',
    website: 'https://www.eskayef.com',
    applyUrl: 'https://www.eskayef.com/careers'
  },
  {
    id: 'social-business-project',
    name: 'Social Business Project Ltd.',
    imageUrl: 'top job/সোশ্যাল বিজনেস প্রোজেক্ট LOGO.png',
    description: 'A pioneer in social business initiatives in Bangladesh...',
    website: 'https://www.socialbusinesspedia.com',
    applyUrl: 'https://www.socialbusinesspedia.com/jobs'
  },
  {
    id: 'united-nations-wfp',
    name: 'United Nations World Food Programme (WFP)',
    imageUrl: 'top job/UNWFP PIC.png',
    description: '(WFP) is the food assistance branch of the United Nations...',
    website: 'https://www.wfp.org',
    applyUrl: 'https://www.wfp.org/careers',
    isExternal: true
  },
  {
    id: 'images-ltd',
    name: 'Images Ltd.',
    imageUrl: 'top job/Images Ltd.png',
    description: 'Leading creative solutions provider in Bangladesh...',
    website: 'https://www.imagesltd.com',
    applyUrl: 'https://www.imagesltd.com/careers'
  },
  {
    id: 'websoft',
    name: 'Websoft Solutions Ltd.',
    imageUrl: 'topjob/Water&Sanitation.png',
    description: 'Innovative web development and digital transformation company with global clients.',
    website: 'https://www.websoft.com.bd',
    applyUrl: 'https://careers.websoft.com.bd',
    isFeatured: true
  }
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('id');
    this.company = this.companies.find(c => c.id === this.companyId);
  }
}
