import { TestBed } from '@angular/core/testing';

import { TodoFormService } from './todo-form.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodoFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TodoFormService = TestBed.get(TodoFormService);
    expect(service).toBeTruthy();
  });
});
