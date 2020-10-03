import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaListItemComponent } from './agenda-list-item.component';

describe('AgendaListItemComponent', () => {
  let component: AgendaListItemComponent;
  let fixture: ComponentFixture<AgendaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
