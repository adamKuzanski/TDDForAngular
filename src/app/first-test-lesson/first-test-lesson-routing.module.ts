import { TodoComponent } from './components/todo/todo.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitTestingComponent } from './components/unit-testing/unit-testing.component';


const moduleRoutes: Routes = [
  { path: 'unitTests', component: UnitTestingComponent },
  { path: 'todoForm', component: ToDoFormComponent},
  { path: 'todo', component: TodoComponent },
  { path: '', redirectTo: 'unitTests', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class FirstTestLessonRoutingModule { }
