import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCertificatesComponent } from './candidate-certificates.component';

describe('CandidateCertificatesComponent', () => {
  let component: CandidateCertificatesComponent;
  let fixture: ComponentFixture<CandidateCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
