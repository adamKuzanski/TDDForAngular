import { ReactiveFormsModule } from '@angular/forms';
import { TodoFormService } from './../../services/todo-form.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { of, Observable, throwError } from 'rxjs';


describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TodoUnitTests', () => {
  let component: TodoComponent;
  let service: TodoFormService;

  beforeEach(() => {
    service = new TodoFormService(null);
    component = new TodoComponent(service);
  });

  it('should set todos property with items returned from the server', () => {
    const todos: any[] = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      const myObservable = of(todos);
      return myObservable;
    });

    component.ngOnInit();

    expect(component.todos).toEqual(todos);
  });

  it('should call the server if new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake((t) => {
      return of();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo returned from the server', () => {
    const todo = { id: 1 };
    const spy = spyOn(service, 'add').and.returnValue(of(todo));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set message property if server returns an error while adding new todo', () => {
    const error = 'Error from the server';
    const spy = spyOn(service, 'add').and.returnValue( throwError(error) );

    component.add();

    expect(component.message).toBe(error);
  });

  it('Should call the server to delete a todo item if the user confirms ', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('Should NOT call the server to delete a todo item if the user cancels ', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).not.toHaveBeenCalledWith(1);
  });
});


