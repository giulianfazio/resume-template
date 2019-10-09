import { Component } from '@angular/core';
import { resume } from '../assets/jsonResume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-template';
  resume = resume;
}
