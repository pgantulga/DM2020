import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelegatesComponent } from './admin-delegates.component';

describe('AdminDelegatesComponent', () => {
  let component: AdminDelegatesComponent;
  let fixture: ComponentFixture<AdminDelegatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDelegatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
