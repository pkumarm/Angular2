import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloworldComponentComponent } from './helloworld-component.component';

describe('HelloworldComponentComponent', () => {
  let component: HelloworldComponentComponent;
  let fixture: ComponentFixture<HelloworldComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloworldComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloworldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
