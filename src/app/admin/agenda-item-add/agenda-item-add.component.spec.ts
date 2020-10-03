import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaItemAddComponent } from './agenda-item-add.component';

describe('AgendaItemAddComponent', () => {
  let component: AgendaItemAddComponent;
  let fixture: ComponentFixture<AgendaItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
