import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToGlendaComponent } from './talk-to-glenda.component';

describe('TalkToGlendaComponent', () => {
  let component: TalkToGlendaComponent;
  let fixture: ComponentFixture<TalkToGlendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkToGlendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkToGlendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
