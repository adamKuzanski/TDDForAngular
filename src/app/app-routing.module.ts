import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'unitTests', loadChildren: 'src/app/first-test-lesson/first-test-lesson.module#FirstTestLessonModule' },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
