import { resume } from './../../assets/jsonResume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-skills',
  templateUrl: './candidate-skills.component.html',
  styleUrls: ['./candidate-skills.component.scss']
})
export class CandidateSkillsComponent implements OnInit {
  skills = resume.skills;
  constructor() { }

  ngOnInit() {
    window['skills'] = this.skills;
  }

}
