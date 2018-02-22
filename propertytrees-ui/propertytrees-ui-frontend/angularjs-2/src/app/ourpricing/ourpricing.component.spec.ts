import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpricingComponent } from './ourpricing.component';

describe('OurprincingComponent', () => {
  let component: OurpricingComponent;
  let fixture: ComponentFixture<OurpricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurpricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
