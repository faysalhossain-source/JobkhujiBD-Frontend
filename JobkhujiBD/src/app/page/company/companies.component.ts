import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-companies',
  imports: [NgFor, RouterModule, CommonModule],
  templateUrl: './companies.component.html',
})
export class CompaniesComponent {
  companies = [
    {
      name: 'BRAC',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/BRAC_logo.svg/2560px-BRAC_logo.svg.png',
      jobs: ['Associate Officer, Front Desk', 'Executive Assistant']
    },
    {
      name: 'Square Textiles PLC.',
      logoUrl: 'https://www.squaregroup.com/images/logo-textile.jpg',
      jobs: ['Fashion Designer', 'Executive - Sales']
    },
    {
      name: 'Save the Children',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Save_the_Children_logo.svg/2560px-Save_the_Children_logo.svg.png',
      jobs: ['Coordinator - Safeguarding', 'Internship - ICT']
    }
    // add more company
  ];
}
