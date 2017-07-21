import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInLayoutComponent } from './logged-in-layout.component';

describe('LoggedInLayoutComponent', () => {
  let component: LoggedInLayoutComponent;
  let fixture: ComponentFixture<LoggedInLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
