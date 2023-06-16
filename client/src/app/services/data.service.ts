import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private url = 'http://localhost:3001';

  constructor(private http: HttpClient) { }
  
  getAll() {
	  return this.http.get(this.url + '/api/books');
  }

  getById(id: string) {
	  return this.http.get(this.url + '/api/todos/' + id);
  }

  deleteBook(id: string) {
    return this.http.delete(this.url + '/api/books/' + id);
  }

  addBook(book: any) {
    return this.http.post(this.url + '/api/books', book);
  }

  completeTodo(todo: any) {
    const updateData = { completed: !todo.completed };
    return this.http.put(this.url + '/api/todos/' + todo.id, updateData);
  }

  editBook(book: any) {
    console.log(book)
    return this.http.put(this.url + '/api/books/' + book.id, book);
  }
}