import { resume } from './../../assets/jsonResume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-volunteering',
  templateUrl: './candidate-volunteering.component.html',
  styleUrls: ['./candidate-volunteering.component.scss']
})
export class CandidateVolunteeringComponent implements OnInit {
  volunteering = resume.volunteer;
  constructor() { }

  ngOnInit() {
  }

}
