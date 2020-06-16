import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyDuplicateInputComponent } from './dynamically-duplicate-input.component';

describe('DynamicallyDuplicateInputComponent', () => {
  let component: DynamicallyDuplicateInputComponent;
  let fixture: ComponentFixture<DynamicallyDuplicateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicallyDuplicateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyDuplicateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
