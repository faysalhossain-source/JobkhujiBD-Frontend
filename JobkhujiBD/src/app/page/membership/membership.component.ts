import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class PaidMembershipComponent {

  stripParentheses(value: string): string {
    return value.replace(/[()]/g, '');
  }

  packages = [
    {
      name: 'FREE',
      price: 'FREE',
      duration: '',
      features: [
        { text: 'Job Search & Apply Unlimited', available: true },
        { text: 'Resume Upload: 2', available: true },
        { text: 'Professional Resume Building (Free Templates)', available: true },
        { text: 'Employability Skills Test (Free Tests)', available: true },
        { text: 'Career Toolkit (Free Resources)', available: true },
        { text: 'Skills Leaderboard Enlistment', available: false, strikethrough: true },
        { text: 'Reward Points', available: false, strikethrough: true },
        { text: 'Career Doctor Attempts: 1', available: true },
        { text: 'Full Analytical Dashboard', available: true }
      ]
    },
    {
      name: 'Monthly',
      price: '100 /-',
      duration: '(1 Month)',
      features: [
        { text: 'Job Search & Apply Unlimited', available: true },
        { text: 'Resume Upload: 5', available: true },
        { text: 'Professional Resume Building (Premium Templates)', available: true },
        { text: 'Employability Skills Test (Premium Tests)', available: true },
        { text: 'Career Toolkit (Premium Resources)', available: true },
        { text: 'Skills Leaderboard Enlistment', available: true },
        { text: 'Reward Points', available: true },
        { text: 'Career Doctor Attempts: 6', available: true },
        { text: 'Full Analytical Dashboard', available: true }
      ]
    },
    {
      name: 'Standard',
      price: '400 /-',
      duration: '(6 Months)',
      features: [
        { text: 'Job Search & Apply Unlimited', available: true },
        { text: 'Resume Upload: 5', available: true },
        { text: 'Professional Resume Building (Premium Templates)', available: true },
        { text: 'Employability Skills Test (Premium Tests)', available: true },
        { text: 'Career Toolkit (Premium Resources)', available: true },
        { text: 'Skills Leaderboard Enlistment', available: true },
        { text: 'Reward Points', available: true },
        { text: 'Career Doctor Attempts: 6', available: true },
        { text: 'Full Analytical Dashboard', available: true }
      ]
    },
    {
      name: 'Membership',
      price: '600 /-',
      duration: '(12 Months)',
      features: [
        { text: 'Job Search & Apply Unlimited', available: true },
        { text: 'Resume Upload: 10', available: true },
        { text: 'Professional Resume Building (Premium Templates)', available: true },
        { text: 'Employability Skills Test (Premium Tests)', available: true },
        { text: 'Career Toolkit (Premium Resources)', available: true },
        { text: 'Skills Leaderboard Enlistment', available: true },
        { text: 'Reward Points', available: true },
        { text: 'Career Doctor Attempts: 12', available: true },
        { text: 'Full Analytical Dashboard', available: true }
      ]
    }
  ];

  benefits = [
    'Hundreds of ready-to-use resume template to create and download your resume',
    'Upload up to 05 resumes (PDF format)',
    'Get access to all premium employability skills tests',
    'Unlock all the premium professional resources',
    'Full access to your analytics dashboard, which will help you stay on top of industry trends',
    'Received regular updates of our career doctor Newsletter'
  ];
}
