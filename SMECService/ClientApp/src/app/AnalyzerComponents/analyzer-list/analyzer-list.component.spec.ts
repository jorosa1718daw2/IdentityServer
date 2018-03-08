import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerListComponent } from './analyzer-list.component';

describe('AnalyzerListComponent', () => {
  let component: AnalyzerListComponent;
  let fixture: ComponentFixture<AnalyzerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
