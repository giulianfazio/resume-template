import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateVolunteeringComponent } from './candidate-volunteering.component';

describe('CandidateVolunteeringComponent', () => {
  let component: CandidateVolunteeringComponent;
  let fixture: ComponentFixture<CandidateVolunteeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateVolunteeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
