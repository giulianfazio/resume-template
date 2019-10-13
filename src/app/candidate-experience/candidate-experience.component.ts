import { Component, OnInit } from '@angular/core';
import { resume } from '../../assets/jsonResume';

@Component({
  selector: 'app-candidate-experience',
  templateUrl: './candidate-experience.component.html',
  styleUrls: ['./candidate-experience.component.scss']
})
export class CandidateExperienceComponent implements OnInit {
  experience = resume.work;

  constructor() { }

  ngOnInit() {
  }

}
