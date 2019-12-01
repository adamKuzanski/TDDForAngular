import { FirstTestLessonModule } from './first-test-lesson/first-test-lesson.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FirstTestLessonModule
      ]
    }).compileComponents();
  }));
});
