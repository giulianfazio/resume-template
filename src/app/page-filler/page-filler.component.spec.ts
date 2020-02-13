import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFillerComponent } from './page-filler.component';

describe('PageFillerComponent', () => {
  let component: PageFillerComponent;
  let fixture: ComponentFixture<PageFillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
