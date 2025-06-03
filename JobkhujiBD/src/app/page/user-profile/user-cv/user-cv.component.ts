import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule,ReactiveFormsModule],
  selector: 'app-profile-view',
  templateUrl: './user-cv.component.html',
  styleUrls: ['./user-cv.component.css']
})
export class UserCVComponent implements OnInit {
  isEditMode = false;
  profilePhoto: string | ArrayBuffer | null = null;
  
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      // Personal Information
      fullName: ['', Validators.required],
      fathersName: [''],
      mothersName: [''],
      dateOfBirth: [''],
      gender: ['male'],
      religion: [''],
      maritalStatus: ['single'],
      nationality: ['Bangladeshi'],
      
      // Contact Information
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      alternateMobile: [''],
      presentAddress: [''],
      permanentAddress: [''],
      
      // Career Information
      careerObjective: [''],
      presentSalary: [''],
      expectedSalary: [''],
      jobLevel: ['entry'],
      jobNature: ['fulltime']
    });
  }

  ngOnInit(): void {
    // Load profile data from service
    this.loadProfileData();
  }

  loadProfileData(): void {
    // In a real app, you would get this from a service
    const sampleData = {
      fullName: 'John Doe',
      fathersName: 'Robert Doe',
      mothersName: 'Mary Doe',
      dateOfBirth: '1990-01-15',
      gender: 'male',
      religion: 'Islam',
      maritalStatus: 'single',
      nationality: 'Bangladeshi',
      email: 'john.doe@example.com',
      mobile: '01712345678',
      alternateMobile: '',
      presentAddress: '123 Main Street, Dhaka',
      permanentAddress: '123 Main Street, Dhaka',
      careerObjective: 'Seeking a challenging position in a reputed organization...',
      presentSalary: '50000',
      expectedSalary: '60000',
      jobLevel: 'mid',
      jobNature: 'fulltime'
    };
    
    this.profileForm.patchValue(sampleData);
    this.profilePhoto = 'assets/sample-profile.jpg';
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    
    if (!this.isEditMode) {
      // Reset form to original values when canceling edit
      this.loadProfileData();
    }
  }

  onPhotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profilePhoto = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      // Save data to backend in a real application
      console.log('Profile updated:', this.profileForm.value);
      this.isEditMode = false;
      alert('Profile updated successfully!');
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  downloadCV(): void {
    // Implement CV download logic
    alert('CV download functionality will be implemented here');
  }

  printCV(): void {
    // Implement CV print logic
    window.print();
  }
}