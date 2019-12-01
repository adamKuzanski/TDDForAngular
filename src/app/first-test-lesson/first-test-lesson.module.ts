import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstTestLessonRoutingModule } from './first-test-lesson-routing.module';
import { UnitTestingComponent } from './components/unit-testing/unit-testing.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from './components/vote/vote.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UnitTestingComponent, ToDoFormComponent, VoteComponent, TodoComponent],
  imports: [
    CommonModule,
    FirstTestLessonRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FirstTestLessonModule { }

