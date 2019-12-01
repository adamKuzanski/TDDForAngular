import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFormComponent } from './to-do-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: ToDoFormComponent;

  beforeEach(() => {
    component = new ToDoFormComponent(new FormBuilder());
  });

  it('should create  a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const control = component.form.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
