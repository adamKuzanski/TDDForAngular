import { TodoFormService } from './../../services/todo-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos: any[] = [];
  public message;

  constructor(private todoService: TodoFormService ) { }

  public ngOnInit() {
    this.todoService.getTodos().subscribe( (t: any[]) => t.forEach(el => {
      this.todos.push(el);
    }));
  }

  public add() {
    const newTodo = { title: '...'};
    this.todoService.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err
    );
  }

  public delete(id: number): void {
    if (confirm('Are you sure?')) {
      this.todoService.delete(id).subscribe();
    }
  }

}
