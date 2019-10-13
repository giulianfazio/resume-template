import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSkillsComponent } from './candidate-skills.component';

describe('CandidateSkillsComponent', () => {
  let component: CandidateSkillsComponent;
  let fixture: ComponentFixture<CandidateSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
