import { resume } from './../../assets/jsonResume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-languages',
  templateUrl: './candidate-languages.component.html',
  styleUrls: ['./candidate-languages.component.scss']
})
export class CandidateLanguagesComponent implements OnInit {
  languages = resume.languages;
  constructor() { }

  ngOnInit() {
  }

}
