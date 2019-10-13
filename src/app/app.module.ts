import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateContactsComponent } from './candidate-contacts/candidate-contacts.component';
import { CandidateEducationComponent } from './candidate-education/candidate-education.component';
import { CandidatePhotoComponent } from './candidate-photo/candidate-photo.component';
import { CandidateLabelingComponent } from './candidate-labeling/candidate-labeling.component';
import { CandidateSummaryComponent } from './candidate-summary/candidate-summary.component';
import { CandidateExperienceComponent } from './candidate-experience/candidate-experience.component';
import { CandidateSkillsComponent } from './candidate-skills/candidate-skills.component';
import { CandidateInterestsComponent } from './candidate-interests/candidate-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateContactsComponent,
    CandidateEducationComponent,
    CandidatePhotoComponent,
    CandidateLabelingComponent,
    CandidateSummaryComponent,
    CandidateExperienceComponent,
    CandidateSkillsComponent,
    CandidateInterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CandidateEducationComponent]
})
export class AppModule { }
