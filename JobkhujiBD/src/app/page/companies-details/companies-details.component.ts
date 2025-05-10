import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-company-details',
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h3>Company: {{ companyName }}</h3>
      <p>This is a detailed page for <b>{{ companyName }}</b>.</p>
    </div>
  `
})
export class CompanyDetailsComponent implements OnInit {
  companyName = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.companyName = this.route.snapshot.paramMap.get('name') || '';
  }
}
