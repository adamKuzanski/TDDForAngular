import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitTestingComponent } from './components/unit-testing/unit-testing.component';


const moduleRoutes: Routes = [
  { path: 'unitTests', component: UnitTestingComponent },
  { path: '', redirectTo: 'unitTests', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class FirstTestLessonRoutingModule { }
