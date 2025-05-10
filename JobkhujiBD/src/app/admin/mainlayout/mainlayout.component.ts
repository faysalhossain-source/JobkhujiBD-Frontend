import { Component } from '@angular/core';
import { LetSideComponent } from "../let-side/let-side.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  imports: [LetSideComponent, RouterOutlet],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

}
