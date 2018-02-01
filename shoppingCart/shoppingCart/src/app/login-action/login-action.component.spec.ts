import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActionComponent } from './login-action.component';

describe('LoginActionComponent', () => {
  let component: LoginActionComponent;
  let fixture: ComponentFixture<LoginActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
