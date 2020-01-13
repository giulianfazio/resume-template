import { resume } from './../../assets/jsonResume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-certificates',
  templateUrl: './candidate-certificates.component.html',
  styleUrls: ['./candidate-certificates.component.scss']
})
export class CandidateCertificatesComponent implements OnInit {
  certificates = resume.certificates;

  constructor() { }

  ngOnInit() {
  }

}
