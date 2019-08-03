import { TestBed } from '@angular/core/testing';

import { UpdateEmployeeService } from './update-employee.service';

describe('UpdateEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateEmployeeService = TestBed.get(UpdateEmployeeService);
    expect(service).toBeTruthy();
  });
});
