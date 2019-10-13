import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInterestsComponent } from './candidate-interests.component';

describe('CandidateInterestsComponent', () => {
  let component: CandidateInterestsComponent;
  let fixture: ComponentFixture<CandidateInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
