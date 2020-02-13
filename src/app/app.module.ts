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
import { CandidateVolunteeringComponent } from './candidate-volunteering/candidate-volunteering.component';
import { CandidateAwardsComponent } from './candidate-awards/candidate-awards.component';
import { CandidateLanguagesComponent } from './candidate-languages/candidate-languages.component';
import { CandidateCertificatesComponent } from './candidate-certificates/candidate-certificates.component';
import { PageFillerComponent } from './page-filler/page-filler.component';

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
    CandidateInterestsComponent,
    CandidateVolunteeringComponent,
    CandidateAwardsComponent,
    CandidateLanguagesComponent,
    CandidateCertificatesComponent,
    PageFillerComponent
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
