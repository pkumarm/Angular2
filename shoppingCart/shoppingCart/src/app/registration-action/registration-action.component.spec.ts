import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationActionComponent } from './registration-action.component';

describe('RegistrationActionComponent', () => {
  let component: RegistrationActionComponent;
  let fixture: ComponentFixture<RegistrationActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
