import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-side',
  imports: [RouterLink],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css'
})
export class LeftSideComponent {
logout() {
throw new Error('Method not implemented.');
}
toggleSidebar() {
throw new Error('Method not implemented.');
}
sidebarCollapsed: any;

}
