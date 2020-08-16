import { Component, OnInit } from '@angular/core';
import { resume } from '../../assets/jsonResume';


@Component({
  selector: 'app-candidate-education',
  templateUrl: './candidate-education.component.html',
  styleUrls: ['./candidate-education.component.scss']
})
export class CandidateEducationComponent implements OnInit {
  educationList = [];
  constructor() {
    let education = resume.education;
    if (!!education) {
      education.forEach(eduItem => {
        let head = eduItem.studyType + ': ' + eduItem.area;
        let grade = eduItem.gpa;Q
        let institution = eduItem.institution;
        let period = eduItem.startDate + ' - ' + (eduItem.endDate || 'Present');
        let info = eduItem.info;
        let courses = eduItem.courses;

        this.educationList.push({
            head: eduItem.studyType + ': ' + eduItem.area,
            grade: eduItem.gpa,
            institution: eduItem.institution,
            period: eduItem.startDate + ' - ' + (eduItem.endDate || 'Present'),
            info: eduItem.info,
            courses: eduItem.courses,
            address: eduItem.address,
        })
      })
    }
  }

  ngOnInit() {

  }

}
