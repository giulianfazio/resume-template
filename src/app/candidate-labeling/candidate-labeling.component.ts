import { Component, OnInit } from '@angular/core';
import { resume } from '../../assets/jsonResume';

@Component({
  selector: 'app-candidate-labeling',
  templateUrl: './candidate-labeling.component.html',
  styleUrls: ['./candidate-labeling.component.scss']
})
export class CandidateLabelingComponent implements OnInit {
  candidateName = resume.basics.name;
  candidateRole = resume.basics.label;
  constructor() { }

  ngOnInit() {
  }

}
