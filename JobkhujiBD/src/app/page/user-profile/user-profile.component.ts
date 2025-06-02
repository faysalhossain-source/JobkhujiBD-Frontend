import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [NgIf],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
 menu = {
    profile: false,
    invitation: false,
    activities: false,
    points: false,
    employer: false,
  };

  toggleMenu(section: keyof typeof this.menu) {
    this.menu[section] = !this.menu[section];
  }

  closeSidebar() {
    // Add your own logic here, like toggling sidebar visibility.
    alert('Sidebar closed!');
  }
}

