import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCrossFieldValidationComponentComponent } from './reactive-form-cross-field-validation-component.component';

describe('ReactiveFormCrossFieldValidationComponentComponent', () => {
  let component: ReactiveFormCrossFieldValidationComponentComponent;
  let fixture: ComponentFixture<ReactiveFormCrossFieldValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormCrossFieldValidationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCrossFieldValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
