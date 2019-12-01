import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoFormService {

  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(
      map(r => r)
    );
  }

  getTodos() {
    return this.http.get('...').pipe(
      map(r => r)
    );
  }

  delete(id) {
    return this.http.delete('...').pipe(
      map(r => JSON.stringify(r))
    );
  }
}
