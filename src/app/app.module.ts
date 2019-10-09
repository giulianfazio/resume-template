import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateContactsComponent } from './candidate-contacts/candidate-contacts.component';
import { CandidateEducationComponent } from './candidate-education/candidate-education.component';
import { CandidatePhotoComponent } from './candidate-photo/candidate-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateContactsComponent,
    CandidateEducationComponent,
    CandidatePhotoComponent
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
