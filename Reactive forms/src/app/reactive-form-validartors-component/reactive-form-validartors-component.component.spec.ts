import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidartorsComponentComponent } from './reactive-form-validartors-component.component';

describe('ReactiveFormValidartorsComponentComponent', () => {
  let component: ReactiveFormValidartorsComponentComponent;
  let fixture: ComponentFixture<ReactiveFormValidartorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidartorsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormValidartorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
