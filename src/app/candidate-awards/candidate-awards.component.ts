import { resume } from './../../assets/jsonResume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-awards',
  templateUrl: './candidate-awards.component.html',
  styleUrls: ['./candidate-awards.component.scss']
})
export class CandidateAwardsComponent implements OnInit {
  awards = resume.awards;
  constructor() { }

  ngOnInit() {
  }

}
