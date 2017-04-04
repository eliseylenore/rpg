import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StealSlippersComponent } from './steal-slippers.component';

describe('StealSlippersComponent', () => {
  let component: StealSlippersComponent;
  let fixture: ComponentFixture<StealSlippersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StealSlippersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StealSlippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
