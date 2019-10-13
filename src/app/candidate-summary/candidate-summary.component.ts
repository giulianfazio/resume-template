import { Component, OnInit } from '@angular/core';
import { resume } from '../../assets/jsonResume';

@Component({
  selector: 'app-candidate-summary',
  templateUrl: './candidate-summary.component.html',
  styleUrls: ['./candidate-summary.component.scss']
})
export class CandidateSummaryComponent implements OnInit {
  candidateSummary = resume.basics.summary;

  constructor() { }

  ngOnInit() {
  }

}
