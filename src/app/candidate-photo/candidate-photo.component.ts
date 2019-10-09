import { Component, OnInit } from '@angular/core';
import { resume } from '../../assets/jsonResume';

@Component({
  selector: 'app-candidate-photo',
  templateUrl: './candidate-photo.component.html',
  styleUrls: ['./candidate-photo.component.scss']
})
export class CandidatePhotoComponent implements OnInit {
  candidatePhoto = resume.basics.picture;

  constructor() { }

  ngOnInit() {
  }

}
