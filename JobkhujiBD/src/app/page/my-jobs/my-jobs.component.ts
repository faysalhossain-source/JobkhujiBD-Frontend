import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], // Import FormsModule for template-driven forms
})
export class MyJobsComponent {
  categoryObj = {
    CategoryName: '',
    ImageUrl: '',
    IsActive: false,
  };

  onSave() {
    console.log('Saving Category:', this.categoryObj);
    // Here you can add the logic to save the category object
    // For example, you can send it to a service or API endpoint
  }
}
