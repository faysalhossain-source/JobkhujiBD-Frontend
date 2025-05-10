import { Component } from '@angular/core';
import { NavbarComponent } from '../navber/navber.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-main-component',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './home-main-component.component.html',
  styleUrl: './home-main-component.component.css'
})
export class HomeMainComponentComponent {

}
