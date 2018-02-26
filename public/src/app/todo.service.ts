import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
// working asynchronously in client side - promises
import 'rxjs/add/operator/toPromise';

import {Todo} from './todo';

@Injectable()
export class TodoService {
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    private todosApiUrl = '/api/todos/Avinash';

    constructor(private http: Http) {}

    getTodos(): Promise <Todo[]> {
        console.log('Getting Todo list from server');
        return this.http.get(this.todosApiUrl)
        .toPromise()
        .then(response => response.json() as Todo[]);
    }
}
