import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherReactiveToChangesComponent } from './watcher-reactive-to-changes.component';

describe('WatcherReactiveToChangesComponent', () => {
  let component: WatcherReactiveToChangesComponent;
  let fixture: ComponentFixture<WatcherReactiveToChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatcherReactiveToChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherReactiveToChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
