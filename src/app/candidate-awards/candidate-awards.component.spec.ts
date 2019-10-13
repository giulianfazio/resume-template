import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAwardsComponent } from './candidate-awards.component';

describe('CandidateAwardsComponent', () => {
  let component: CandidateAwardsComponent;
  let fixture: ComponentFixture<CandidateAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
