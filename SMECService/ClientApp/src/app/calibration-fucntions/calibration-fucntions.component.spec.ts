import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationFucntionsComponent } from './calibration-fucntions.component';

describe('CalibrationFucntionsComponent', () => {
  let component: CalibrationFucntionsComponent;
  let fixture: ComponentFixture<CalibrationFucntionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalibrationFucntionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationFucntionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
