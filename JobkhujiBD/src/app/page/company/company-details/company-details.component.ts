import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLink,NgIf, NgIf,CommonModule]
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
      imageUrl: 'topjob/Cube Holdings Ltd pic.jpg',
      description: 'Cube Holdings is a top tech company in Bangladesh...',
      website: 'google.com'
    },
    {
      id: 'eskayef',
      name: 'Eskayef Pharmaceuticals Ltd',
      imageUrl: 'topjob/EPL PIC.png',
      description: 'Eskayef is a leading pharma company in Bangladesh...',
    },
    {
      id: 'সোশ্যাল বিজনেস প্রোজেক্ট লিমিটেড',
      name: 'Social Business Project Ltd.',
      imageUrl: 'top job/সোশ্যাল বিজনেস প্রোজেক্ট PIC.jpg',
      description: 'Beximco is a renowned pharmaceutical company...',
    },
    {
      id: ' United Nations World Food Programme (WFP)',
      name: 'United Nations World Food Programme (WFP)',
      externalUrl: 'https://www.wfp.org/careers',
      isExternal: true,
      description: '(WFP) is the food assistance branch of the United Nations...',
    },
    {
      id: 'image Lmd',
      name: 'images Ltd.',
      imageUrl: 'top job/Images Lmd pic.jpg',
      description: 'Grameenphone is the largest telecom operator in Bangladesh...',
    },
    // Add all companies here
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('id');
    this.company = this.companies.find(c => c.id === this.companyId);
  }
}
