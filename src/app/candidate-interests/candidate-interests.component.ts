import { resume } from './../../assets/jsonResume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-interests',
  templateUrl: './candidate-interests.component.html',
  styleUrls: ['./candidate-interests.component.scss']
})
export class CandidateInterestsComponent implements OnInit {
  interests = resume.interests;
  constructor() { }

  ngOnInit() {
  }

}
