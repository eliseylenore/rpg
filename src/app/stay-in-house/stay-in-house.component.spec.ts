import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayInHouseComponent } from './stay-in-house.component';

describe('StayInHouseComponent', () => {
  let component: StayInHouseComponent;
  let fixture: ComponentFixture<StayInHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayInHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayInHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
