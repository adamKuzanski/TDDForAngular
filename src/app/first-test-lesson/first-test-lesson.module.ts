import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstTestLessonRoutingModule } from './first-test-lesson-routing.module';
import { UnitTestingComponent } from './components/unit-testing/unit-testing.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UnitTestingComponent, ToDoFormComponent],
  imports: [
    CommonModule,
    FirstTestLessonRoutingModule,
    ReactiveFormsModule
  ]
})
export class FirstTestLessonModule { }

