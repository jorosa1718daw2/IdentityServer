import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusAddComponent } from './focus-add.component';

describe('FocusAddComponent', () => {
  let component: FocusAddComponent;
  let fixture: ComponentFixture<FocusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
