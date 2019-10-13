import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLabelingComponent } from './candidate-labeling.component';

describe('CandidateLabelingComponent', () => {
  let component: CandidateLabelingComponent;
  let fixture: ComponentFixture<CandidateLabelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateLabelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLabelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
