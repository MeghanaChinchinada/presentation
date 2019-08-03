import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsortedemployeesComponent } from './addsortedemployees.component';

describe('AddsortedemployeesComponent', () => {
  let component: AddsortedemployeesComponent;
  let fixture: ComponentFixture<AddsortedemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsortedemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsortedemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
