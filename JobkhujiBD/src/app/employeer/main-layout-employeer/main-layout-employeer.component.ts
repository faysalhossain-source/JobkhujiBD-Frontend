import { Component } from '@angular/core';
import { LeftSideComponent } from "../left-side/left-side.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout-employeer',
  imports: [LeftSideComponent,RouterOutlet],
  templateUrl: './main-layout-employeer.component.html',
  styleUrl: './main-layout-employeer.component.css'
})
export class MainLayoutEmployeerComponent {

}
