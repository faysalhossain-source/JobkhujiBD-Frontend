import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchKeyword = '';
  searchLocation = '';
  searchExperience = '';
  images: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
  // You can add initial logic here in the future
// For example: fetching data from an API, or setting some configurations, etc.
    console.log('HomeComponent initialized');
  }

  onSearch() {
    this.router.navigate(['/jobs'], {
      queryParams: {
        keyword: this.searchKeyword,
        location: this.searchLocation,
        experience: this.searchExperience
      }
    });
  }
}
