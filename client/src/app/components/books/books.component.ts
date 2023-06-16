import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: any[] = [];

  constructor(
    private service: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.service.getAll().subscribe(
      (response: any) => {
        this.books = response;
        console.log(this.books)
      },
      (error: any) => {
        console.error('Błąd podczas pobierania książek', error);
      }
    );
  }

  deleteBook(book: any): void {
    this.service.deleteBook(book.id).subscribe(
      (response: any) => {
        this.getAllBooks();
      },
      (error: any) => {
        console.error('Błąd podczas usuwania książki', error);
      }
    );
  }

  editBook(book: any): void {
    this.router.navigate(['/edit', book.id], { state: { book: book } });
  }

}
