import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalConsultantComponent } from './legal-consultant.component';

describe('LegalConsultantComponent', () => {
  let component: LegalConsultantComponent;
  let fixture: ComponentFixture<LegalConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
