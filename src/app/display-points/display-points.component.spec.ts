import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPointsComponent } from './display-points.component';

describe('DisplayPointsComponent', () => {
  let component: DisplayPointsComponent;
  let fixture: ComponentFixture<DisplayPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
